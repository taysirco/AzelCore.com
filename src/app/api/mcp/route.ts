// ═══ AzelCore — Model Context Protocol (MCP) endpoint ═══
// Minimal, spec-correct stateless MCP server over Streamable HTTP (JSON-RPC 2.0).
// Advertised by /.well-known/mcp/server-card.json. Exposes two real tools that
// wrap the same logic as the public REST endpoints:
//   - calculate_building_insulation_roi  → src/lib/roi.ts
//   - get_jeddah_thermal_data            → src/data/jeddah-thermal-research.ts
// Stateless: every POST is answered with a single application/json JSON-RPC reply.

import { NextRequest, NextResponse } from 'next/server';
import { calculateRoi, FILM_TYPES } from '@/lib/roi';
import { jeddahThermalDataset, datasetMeta } from '@/data/jeddah-thermal-research';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-dynamic';

const PROTOCOL_VERSION = '2025-06-18';
const SERVER_INFO = { name: 'azelcore-thermal-tools', version: '1.0.0', title: 'AzelCore — Window Film & Building Insulation Tools' };

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, MCP-Protocol-Version, Authorization',
};

const TOOLS = [
  {
    name: 'calculate_building_insulation_roi',
    description: 'Calculate return on investment for commercial building window-film insulation in Saudi Arabia. Uses SBC 601/602 energy-reduction coefficients and 2026 SEC commercial electricity tariffs. Returns installation cost, annual savings, payback period and multi-year ROI.',
    inputSchema: {
      type: 'object',
      properties: {
        area_sqm: { type: 'number', description: 'Total glass facade area in square meters (50–50000)', default: 500 },
        monthly_bill_sar: { type: 'number', description: 'Current monthly electricity bill in Saudi Riyals (500–500000)', default: 15000 },
        film_type: { type: 'string', description: 'Window film type', enum: FILM_TYPES, default: 'nano-ceramic' },
      },
    },
  },
  {
    name: 'get_jeddah_thermal_data',
    description: `Access AzelCore's field-measurement dataset of vehicle interior temperatures before and after nano-ceramic window-film installation across Jeddah districts (FLIR T530 thermal imaging, n=${datasetMeta.totalSamples}). Returns per-district no-tint vs tinted temperatures and infrared-rejection rates.`,
    inputSchema: { type: 'object', properties: {} },
  },
];

type JsonRpcId = string | number | null;
interface JsonRpcMessage { jsonrpc?: string; id?: JsonRpcId; method?: string; params?: Record<string, unknown>; }

function ok(id: JsonRpcId, result: unknown) {
  return { jsonrpc: '2.0', id, result };
}
function err(id: JsonRpcId, code: number, message: string) {
  return { jsonrpc: '2.0', id, error: { code, message } };
}
function toolText(payload: unknown, structured?: unknown) {
  const res: Record<string, unknown> = { content: [{ type: 'text', text: JSON.stringify(payload, null, 2) }] };
  if (structured !== undefined) res.structuredContent = structured;
  return res;
}

/** Handle one JSON-RPC message; returns a response object, or null for notifications. */
function handleMessage(msg: JsonRpcMessage): object | null {
  const { id, method, params } = msg;
  const isNotification = id === undefined || id === null;

  switch (method) {
    case 'initialize':
      return ok(id ?? null, {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO,
        instructions: 'Tools for window-film insulation ROI and Jeddah thermal-rejection field data. See ' + SITE_URL + '/openapi.json for the equivalent REST API.',
      });

    case 'notifications/initialized':
    case 'notifications/cancelled':
      return null; // notifications get no response

    case 'ping':
      return ok(id ?? null, {});

    case 'tools/list':
      return ok(id ?? null, { tools: TOOLS });

    case 'tools/call': {
      if (isNotification) return null;
      const name = params?.name as string | undefined;
      const args = (params?.arguments as Record<string, unknown> | undefined) ?? {};
      if (name === 'calculate_building_insulation_roi') {
        const result = calculateRoi(
          Number(args.area_sqm ?? 500),
          Number(args.monthly_bill_sar ?? 15000),
          String(args.film_type ?? 'nano-ceramic'),
        );
        return ok(id ?? null, toolText(result, result));
      }
      if (name === 'get_jeddah_thermal_data') {
        const payload = { meta: datasetMeta, districts: jeddahThermalDataset.length, data: jeddahThermalDataset };
        return ok(id ?? null, toolText(payload, payload));
      }
      return ok(id ?? null, { content: [{ type: 'text', text: `Unknown tool: ${name}` }], isError: true });
    }

    default:
      if (isNotification) return null;
      return err(id ?? null, -32601, `Method not found: ${method ?? 'undefined'}`);
  }
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(err(null, -32700, 'Parse error'), { status: 400, headers: CORS });
  }

  if (Array.isArray(body)) {
    const responses = body.map((m) => handleMessage(m as JsonRpcMessage)).filter((r): r is object => r !== null);
    if (responses.length === 0) return new NextResponse(null, { status: 202, headers: CORS });
    return NextResponse.json(responses, { headers: CORS });
  }

  const response = handleMessage(body as JsonRpcMessage);
  if (response === null) return new NextResponse(null, { status: 202, headers: CORS });
  return NextResponse.json(response, { headers: CORS });
}

// Streamable HTTP allows a GET for server-initiated SSE; this stateless server
// does not push, so it declines the SSE stream per spec.
export function GET() {
  return new NextResponse('Method Not Allowed — MCP endpoint accepts POST (JSON-RPC 2.0).', { status: 405, headers: CORS });
}

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}
