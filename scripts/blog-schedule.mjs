#!/usr/bin/env node
// ═══ Blog publishing schedule — status & planner ═══
//
//   node scripts/blog-schedule.mjs                 → show what is live vs scheduled
//   node scripts/blog-schedule.mjs <slug> <date>   → schedule one article (YYYY-MM-DD)
//   node scripts/blog-schedule.mjs --drip <date> <everyNdays> <slug...>
//                                                  → spread several articles apart
//
// Editing `published` in src/data/blog-dates.ts is all that publishing requires:
// a future date hides the article until that day, then ISR reveals it with no deploy.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATES_FILE = join(ROOT, 'src/data/blog-dates.ts');

const todayRiyadh = () =>
  new Date(Date.now() + 3 * 3_600_000).toISOString().slice(0, 10);

function readDates() {
  const src = readFileSync(DATES_FILE, 'utf8');
  const map = new Map();
  for (const m of src.matchAll(
    /'([a-z0-9-]+)':\s*\{\s*published:\s*'([\d-]+)',\s*modified:\s*'([\d-]+)'\s*\}/g
  )) {
    map.set(m[1], { published: m[2], modified: m[3] });
  }
  return { src, map };
}

function setDate(slug, date) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`bad date: ${date} (want YYYY-MM-DD)`);
  const { src, map } = readDates();
  if (!map.has(slug)) throw new Error(`unknown slug: ${slug}`);
  const cur = map.get(slug);
  const updated = src.replace(
    new RegExp(`('${slug}':\\s*\\{\\s*published:\\s*')[\\d-]+(')`),
    `$1${date}$2`
  );
  if (updated === src) throw new Error(`failed to rewrite ${slug}`);
  writeFileSync(DATES_FILE, updated);
  console.log(`  ${slug}: ${cur.published} → ${date}`);
}

const args = process.argv.slice(2);
const today = todayRiyadh();

if (args[0] === '--drip') {
  const [, start, everyRaw, ...slugs] = args;
  const every = Number(everyRaw);
  if (!start || !Number.isFinite(every) || every < 1 || slugs.length === 0) {
    console.error('usage: --drip <YYYY-MM-DD> <everyNdays> <slug...>');
    process.exit(1);
  }
  console.log(`Scheduling ${slugs.length} article(s) from ${start}, one every ${every} day(s):`);
  slugs.forEach((slug, i) => {
    const d = new Date(start + 'T00:00:00Z');
    d.setUTCDate(d.getUTCDate() + i * every);
    setDate(slug, d.toISOString().slice(0, 10));
  });
  console.log('\nCommit and push — each article goes live on its date automatically.');
} else if (args.length === 2) {
  setDate(args[0], args[1]);
  console.log('\nCommit and push — it goes live on that date automatically.');
} else {
  const { map } = readDates();
  const live = [];
  const scheduled = [];
  for (const [slug, d] of map) (d.published <= today ? live : scheduled).push({ slug, ...d });

  console.log(`Today (Riyadh): ${today}`);
  console.log(`Live: ${live.length}   Scheduled: ${scheduled.length}   Total: ${map.size}\n`);

  if (scheduled.length) {
    console.log('── Scheduled (hidden until their date) ──');
    scheduled
      .sort((a, b) => a.published.localeCompare(b.published))
      .forEach((a) => {
        const days = Math.ceil(
          (new Date(a.published) - new Date(today)) / 86_400_000
        );
        console.log(`  ${a.published}  (in ${days}d)  ${a.slug}`);
      });
  } else {
    console.log('── Nothing scheduled — every article is already live. ──');
  }

  const newest = live.map((a) => a.published).sort().pop();
  if (newest) {
    const gap = Math.floor((new Date(today) - new Date(newest)) / 86_400_000);
    console.log(`\nMost recent publish: ${newest} (${gap} days ago)`);
    if (gap > 14 && !scheduled.length) {
      console.log('⚠️  No new content in over two weeks and nothing queued.');
    }
  }
}
