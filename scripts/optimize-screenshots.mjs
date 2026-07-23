#!/usr/bin/env node
// Converts raw RackWall app screenshots into responsive WebP tiers for the
// homepage "See it in action" section and the inline feature-card accents.
//
// Usage: node scripts/optimize-screenshots.mjs <path-to-archive-output-dir>
// The input dir must contain pages/*.png and hero/*.png as documented in
// the screenshot archive's own INDEX.md. Only the generated WebP output is
// committed to this repo — raw source PNGs are never checked in.

import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const inputDir = process.argv[2];
if (!inputDir) {
  console.error("Usage: node scripts/optimize-screenshots.mjs <path-to-archive-output-dir>");
  process.exit(1);
}

const outDir = path.resolve("public/screens");

// Page shots are 2880x1800 (2x) native. 640/1024/1440w covers mobile through
// a crisp 2x render at this site's actual grid cell width (~500px desktop,
// max-w-5xl 2-col) with headroom if the section widens later.
const PAGES = [
  { key: "overview", file: "overview-desktop-dark.png" },
  { key: "filament", file: "filament-desktop-dark.png" },
  { key: "printers", file: "printers-active-desktop-dark.png" },
  { key: "models", file: "models-desktop-dark.png" },
  { key: "spool-detail", file: "spool-detail-desktop-dark.png" },
  { key: "filament-light", file: "filament-desktop-light.png" },
];
const PAGE_WIDTHS = [640, 1024, 1440];

// Inline feature-card accents, displayed small (~280px) next to body copy.
const ACCENTS = [
  { key: "printer-card", file: "printer-card-active.png" },
  { key: "spool-card", file: "spool-card-single.png" },
];
const ACCENT_WIDTHS = [280, 560];

async function convert(srcPath, destPath, width) {
  await sharp(srcPath).resize({ width }).webp({ quality: 82 }).toFile(destPath);
  console.log(`  ${path.basename(destPath)}`);
}

async function main() {
  const pagesOut = path.join(outDir, "pages");
  const accentsOut = path.join(outDir, "accents");
  await mkdir(pagesOut, { recursive: true });
  await mkdir(accentsOut, { recursive: true });

  for (const { key, file } of PAGES) {
    const src = path.join(inputDir, "pages", file);
    console.log(`${key} (${file}):`);
    for (const w of PAGE_WIDTHS) {
      await convert(src, path.join(pagesOut, `${key}-${w}.webp`), w);
    }
  }

  for (const { key, file } of ACCENTS) {
    const src = path.join(inputDir, "hero", file);
    console.log(`${key} (${file}):`);
    for (const w of ACCENT_WIDTHS) {
      await convert(src, path.join(accentsOut, `${key}-${w}.webp`), w);
    }
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
