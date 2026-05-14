'use client';

import { useEffect } from 'react';

/**
 * ═══ WebMCP — Expose Site Tools to AI Agents via Browser ═══
 * Implements the WebMCP API (navigator.modelContext.registerTool)
 * per https://webmachinelearning.github.io/webmcp/
 * 
 * Exposes AzelCore's key actions to in-browser AI agents:
 * 1. calculate_roi — Building insulation ROI calculator
 * 2. get_thermal_data — Jeddah thermal research dataset
 * 3. navigate_to — Navigate to key site pages
 */
export default function WebMCPProvider() {
  useEffect(() => {
    // Check if the WebMCP API is available
    if (typeof navigator === 'undefined') return;
    if (!('modelContext' in navigator)) return;
    
    const mc = (navigator as any).modelContext;
    if (!mc || typeof mc.registerTool !== 'function') return;

    const controller = new AbortController();
    const { signal } = controller;

    // ═══ Tool 1: ROI Calculator ═══
    mc.registerTool({
      name: 'calculate_building_insulation_roi',
      description: 'Calculate return on investment for commercial building window film insulation in Saudi Arabia. Uses SBC 601/602 energy codes and SEC electricity tariffs.',
      inputSchema: {
        type: 'object',
        properties: {
          area_sqm: {
            type: 'number',
            description: 'Glass facade area in square meters (50-50000)',
            default: 500,
          },
          monthly_bill_sar: {
            type: 'number',
            description: 'Monthly electricity bill in Saudi Riyals (500-500000)',
            default: 15000,
          },
          film_type: {
            type: 'string',
            description: 'Window film type',
            enum: ['nano-ceramic', 'reflective-silver', 'reflective-grey', 'safety'],
            default: 'nano-ceramic',
          },
        },
      },
      execute: async (input: { area_sqm?: number; monthly_bill_sar?: number; film_type?: string }) => {
        const params = new URLSearchParams();
        if (input.area_sqm) params.set('area_sqm', String(input.area_sqm));
        if (input.monthly_bill_sar) params.set('monthly_bill_sar', String(input.monthly_bill_sar));
        if (input.film_type) params.set('film_type', input.film_type);
        
        const res = await fetch(`/api/calculate-roi?${params}`);
        return await res.json();
      },
    }, { signal });

    // ═══ Tool 2: Thermal Research Data ═══
    mc.registerTool({
      name: 'get_jeddah_thermal_data',
      description: 'Access FLIR T530 thermal imaging research data: vehicle interior temperatures before and after nano-ceramic window film across 10 Jeddah districts. 530 samples over 24 months.',
      inputSchema: {
        type: 'object',
        properties: {},
      },
      execute: async () => {
        const res = await fetch('/api/research/jeddah-thermal-data');
        return await res.json();
      },
    }, { signal });

    // ═══ Tool 3: Site Navigation ═══
    mc.registerTool({
      name: 'navigate_to_page',
      description: 'Navigate to a specific page on AzelCore.com. Available pages: home, car-tinting, building-insulation, johnson-dealer, 3m-dealer, calculator, research, blog, gallery, contact, faq.',
      inputSchema: {
        type: 'object',
        properties: {
          page: {
            type: 'string',
            description: 'The page to navigate to',
            enum: [
              'home',
              'car-tinting',
              'building-insulation',
              'johnson-dealer',
              '3m-dealer',
              'calculator',
              'research',
              'blog',
              'gallery',
              'contact',
              'faq',
            ],
          },
        },
        required: ['page'],
      },
      execute: async (input: { page: string }) => {
        const routes: Record<string, string> = {
          'home': '/',
          'car-tinting': '/car-insulation-jeddah',
          'building-insulation': '/building-glass-insulation',
          'johnson-dealer': '/johnson-authorized-dealer',
          '3m-dealer': '/3m-authorized-dealer',
          'calculator': '/calculator',
          'research': '/research/ksa-thermal-report-2026',
          'blog': '/blog',
          'gallery': '/gallery',
          'contact': '/contact',
          'faq': '/faq',
        };
        const url = routes[input.page] || '/';
        window.location.href = url;
        return { navigated: url };
      },
    }, { signal });

    // Cleanup: unregister tools when component unmounts
    return () => {
      controller.abort();
    };
  }, []);

  // This component renders nothing — it only registers WebMCP tools
  return null;
}
