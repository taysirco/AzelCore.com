#!/usr/bin/env node
// ═══ Blog data integrity check ═══
//
//   node scripts/validate-blog.mjs
//
// The blog is data-driven: an article is a module in src/data/blog-content/ that must ALSO be
// registered in blog-topics.ts (title + keyword) and blog-dates.ts (publish/modified), and must
// have its hero image on disk. Miss any one of those and the page renders wrong — a missing image
// file in particular renders a broken <Image> in the blog index, which is not caught by the build.
// Exits non-zero on any problem so it can gate a deploy.

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_DIR = join(ROOT, 'src/data/blog-content');

const problems = [];
const warn = [];

// ── registered slugs ────────────────────────────────────────────────────────
const indexSrc = readFileSync(join(CONTENT_DIR, 'index.ts'), 'utf8');
const mapBody = indexSrc.split('export const articles')[1] || '';
const registered = [...mapBody.matchAll(/^\s*'([a-z0-9-]+)':/gm)].map((m) => m[1]);

// ── module files on disk ────────────────────────────────────────────────────
const moduleFiles = readdirSync(CONTENT_DIR)
  .filter((f) => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts')
  .map((f) => f.replace(/\.ts$/, ''));

for (const slug of registered) {
  if (!moduleFiles.includes(slug)) problems.push(`${slug}: registered in index.ts but ${slug}.ts is missing`);
}
for (const f of moduleFiles) {
  if (!registered.includes(f)) warn.push(`${f}.ts exists but is NOT registered in index.ts (dead file)`);
}

// ── topics + dates coverage ─────────────────────────────────────────────────
const topicsSrc = readFileSync(join(ROOT, 'src/data/blog-topics.ts'), 'utf8');
const datesSrc = readFileSync(join(ROOT, 'src/data/blog-dates.ts'), 'utf8');

for (const slug of registered) {
  if (!topicsSrc.includes(`"${slug}"`) && !topicsSrc.includes(`'${slug}'`)) {
    problems.push(`${slug}: no entry in blog-topics.ts (title/keyword would fall back to the slug)`);
  }
  if (!datesSrc.includes(`'${slug}'`) && !datesSrc.includes(`"${slug}"`)) {
    warn.push(`${slug}: no entry in blog-dates.ts — falls back to the DEFAULT date`);
  }
}

// ── hero images + internal links ────────────────────────────────────────────
for (const slug of registered) {
  const src = readFileSync(join(CONTENT_DIR, `${slug}.ts`), 'utf8');

  const img = src.match(/["']?ogImage["']?\s*:\s*["']([^"']+)["']/);
  if (!img) {
    warn.push(`${slug}: no ogImage (article renders without a hero; blog card image will be broken)`);
  } else if (!existsSync(join(ROOT, 'public/images', img[1]))) {
    problems.push(`${slug}: ogImage file missing → public/images/${img[1]}`);
  }

  for (const m of src.matchAll(/["']href["']?\s*:\s*["'](\/blog\/[a-z0-9-]+)["']/g)) {
    const target = m[1].replace('/blog/', '');
    if (!existsSync(join(CONTENT_DIR, `${target}.ts`))) {
      problems.push(`${slug}: dead internal link → ${m[1]}`);
    }
  }

  // Note: article prose uses an en-dash for price ranges site-wide (pricing-tiers.ts uses a hyphen).
  // That is a deliberate, consistent typographic convention, not a defect — do not lint it.
}

// ── report ──────────────────────────────────────────────────────────────────
console.log(`Registered articles: ${registered.length}`);
console.log(`Module files:        ${moduleFiles.length}`);

if (warn.length) {
  console.log(`\nWarnings (${warn.length}):`);
  warn.forEach((w) => console.log(`  ⚠️  ${w}`));
}

if (problems.length) {
  console.log(`\nProblems (${problems.length}):`);
  problems.forEach((p) => console.log(`  ❌ ${p}`));
  console.log('\nFAILED');
  process.exit(1);
}

console.log('\n✅ blog data is consistent');
