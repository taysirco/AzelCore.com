#!/usr/bin/env node
// ═══ Generate blog hero images via Google Gemini / Imagen ═══
//
//   export GEMINI_API_KEY=...
//   node scripts/generate-gemini-images.mjs           # all missing images
//   node scripts/generate-gemini-images.mjs <slug>    # just one
//
// The key is read ONLY from the environment; it is never printed, logged or
// written to any file. Passed to Google via the x-goog-api-key header (not a
// URL query string) so it does not appear in HTTP access logs.

import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'public/images/blog');
const KEY = process.env.GEMINI_API_KEY;

if (!KEY) {
  console.error('GEMINI_API_KEY is not set — export it in your shell and rerun.');
  process.exit(1);
}

const cfg = JSON.parse(readFileSync(join(ROOT, 'scripts/blog-image-prompts.json'), 'utf8'));
const only = process.argv[2];
const todo = cfg.images.filter((i) => (!only || i.slug === only));
if (!todo.length) { console.error(`no prompt found for "${only}"`); process.exit(1); }

mkdirSync(OUT_DIR, { recursive: true });

// Try Imagen models in priority order; fall back if the key does not have access
// to the newer ones.  Gemini 2.5 Flash Image (nano-banana) is the multi-modal
// fallback that uses a different endpoint shape.
// This key's allowlist as of Aug 2026 exposes the Gemini image family but not
// Imagen — so target Gemini directly.  Pro first for hero quality; Flash is the
// fallback if a specific prompt trips a Pro-only refusal.
const IMAGEN_MODELS = [];  // intentionally empty for this key
const GEMINI_IMAGE_MODELS = ['gemini-3-pro-image', 'gemini-2.5-flash-image'];
const GEMINI_IMAGE_MODEL = GEMINI_IMAGE_MODELS[0];
const API = 'https://generativelanguage.googleapis.com/v1beta';

async function imagenGenerate(model, fullPrompt) {
  const res = await fetch(`${API}/models/${model}:predict`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY },
    body: JSON.stringify({
      instances: [{ prompt: fullPrompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio: '16:9',
        personGeneration: 'dont_allow',
        safetyFilterLevel: 'block_only_high',
      },
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) return { ok: false, status: res.status, err: JSON.stringify(data).slice(0, 400) };
  const b64 = data?.predictions?.[0]?.bytesBase64Encoded;
  if (!b64) return { ok: false, status: 200, err: 'no bytesBase64Encoded in response' };
  return { ok: true, b64, model };
}

async function geminiImageGenerate(fullPrompt, model = GEMINI_IMAGE_MODEL) {
  const res = await fetch(`${API}/models/${model}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
      generationConfig: { responseModalities: ['IMAGE'] },
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) return { ok: false, status: res.status, err: JSON.stringify(data).slice(0, 400) };
  const parts = data?.candidates?.[0]?.content?.parts || [];
  const img = parts.find((p) => p.inlineData || p.inline_data);
  const b64 = img?.inlineData?.data || img?.inline_data?.data;
  if (!b64) return { ok: false, status: 200, err: 'no inline image in response' };
  return { ok: true, b64, model };
}

for (const { slug, prompt } of todo) {
  const out = join(OUT_DIR, `${slug}-1.webp`);
  if (existsSync(out)) { console.log(`  skip (exists): ${slug}`); continue; }

  const fullPrompt = `${cfg._style}\n\n${prompt}`;
  process.stdout.write(`  ${slug} ... `);

  let result;
  for (const m of IMAGEN_MODELS) {
    result = await imagenGenerate(m, fullPrompt);
    if (result.ok) break;
    if (result.status === 400 || result.status === 404 || result.status === 403) continue;
    break;
  }
  if (!result?.ok) {
    for (const gm of GEMINI_IMAGE_MODELS) {
      result = await geminiImageGenerate(fullPrompt, gm);
      if (result.ok) break;
    }
  }

  if (!result.ok) {
    console.log('FAILED');
    console.error(`    ${result.status}: ${result.err}`);
    continue;
  }

  const tmp = join(OUT_DIR, `.${slug}.png`);
  writeFileSync(tmp, Buffer.from(result.b64, 'base64'));
  execFileSync('magick', [tmp, '-resize', '1536x864^', '-gravity', 'center', '-extent', '1536x864',
                          '-quality', '85', '-strip', out]);
  execFileSync('rm', ['-f', tmp]);
  const kb = Math.round(readFileSync(out).length / 1024);
  console.log(`ok via ${result.model} (${kb}KB)`);
}

console.log('\nNext: node scripts/validate-blog.mjs   then uncomment the ogImage line in each article.');
