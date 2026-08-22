#!/usr/bin/env node
// ═══ Generate the missing blog hero images via the OpenAI Images API ═══
//
//   export OPENAI_API_KEY=...        # set it in YOUR shell; never paste it into chat
//   node scripts/generate-blog-images.mjs            # generate every missing image
//   node scripts/generate-blog-images.mjs <slug>     # just one
//
// Writes public/images/blog/<slug>-1.webp (1536x864, 16:9) and then leaves the
// EXIF/SEO pass to the existing tooling. Skips any image that already exists.

import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'public/images/blog');
const KEY = process.env.OPENAI_API_KEY;

if (!KEY) {
  console.error('OPENAI_API_KEY is not set.\n' +
    'Set it in your own shell first:  export OPENAI_API_KEY=sk-...\n' +
    'Do not paste the key into a chat message.');
  process.exit(1);
}

const cfg = JSON.parse(readFileSync(join(ROOT, 'scripts/blog-image-prompts.json'), 'utf8'));
const only = process.argv[2];
const todo = cfg.images.filter((i) => (!only || i.slug === only));
if (!todo.length) { console.error(`no prompt found for "${only}"`); process.exit(1); }

mkdirSync(OUT_DIR, { recursive: true });

for (const { slug, prompt } of todo) {
  const out = join(OUT_DIR, `${slug}-1.webp`);
  if (existsSync(out)) { console.log(`  skip (exists): ${slug}`); continue; }

  process.stdout.write(`  generating ${slug} ... `);
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt: `${cfg._style}\n\n${prompt}`,
      size: '1536x1024',
      quality: 'high',
      n: 1,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.log('FAILED');
    console.error(`    ${res.status}: ${err.slice(0, 300)}`);
    continue;
  }

  const data = await res.json();
  const b64 = data?.data?.[0]?.b64_json;
  if (!b64) { console.log('FAILED (no image in response)'); continue; }

  const tmp = join(OUT_DIR, `.${slug}.png`);
  writeFileSync(tmp, Buffer.from(b64, 'base64'));
  // Convert to the site's webp convention, 16:9, quality matched to the existing set.
  execFileSync('magick', [tmp, '-resize', '1536x864^', '-gravity', 'center', '-extent', '1536x864',
                          '-quality', '85', '-strip', out]);
  execFileSync('rm', ['-f', tmp]);
  const kb = Math.round(readFileSync(out).length / 1024);
  console.log(`ok (${kb}KB)`);
}

console.log('\nNext:');
console.log('  1. node scripts/validate-blog.mjs        # confirms every image is present');
console.log('  2. uncomment the ogImage line in each article module');
