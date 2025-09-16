#!/usr/bin/env node
// Extract a minimal set of color and text tokens from a local Figma file export
// Input: ../../.design/figma/file.json (from this script file location)
// Output: ../src/app/design-tokens.css

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const figmaJsonPath = resolve(__dirname, "../../.design/figma/file.json");
const outputCssPath = resolve(__dirname, "../src/app/design-tokens.css");

function clamp01(x) {
  return Math.max(0, Math.min(1, x));
}

function toHex(n) {
  const h = Math.round(clamp01(n) * 255).toString(16).padStart(2, "0");
  return h;
}

function rgbaToHex(color, opacity) {
  const r = toHex(color.r);
  const g = toHex(color.g);
  const b = toHex(color.b);
  const a = opacity === undefined ? 1 : opacity;
  if (a >= 1) return `#${r}${g}${b}`;
  return `#${r}${g}${b}${toHex(a)}`;
}

/**
 * Recursively walk node tree and collect solid fills and text styles
 */
function walk(node, acc) {
  if (!node || typeof node !== "object") return;
  // Collect solid fills and strokes
  const paintSources = [];
  if (Array.isArray(node.fills)) paintSources.push(...node.fills);
  if (Array.isArray(node.strokes)) paintSources.push(...node.strokes);
  for (const p of paintSources) {
    if (!p || p.visible === false) continue;
    if (p.type === "SOLID" && p.color) {
      const hex = rgbaToHex(p.color, p.opacity ?? p.color.a ?? 1);
      acc.colors.add(hex);
    }
  }
  // Collect text styles
  if (node.type === "TEXT" && node.style) {
    const s = node.style;
    const family = s.fontFamily || "system-ui";
    const weight = s.fontWeight || 400;
    const size = s.fontSize || 16;
    acc.textStyles.push({ family, weight, size });
  }
  if (Array.isArray(node.children)) {
    for (const c of node.children) walk(c, acc);
  }
}

function mostFrequent(items, key) {
  const counts = new Map();
  for (const it of items) {
    const k = key(it);
    counts.set(k, (counts.get(k) || 0) + 1);
  }
  let best = null;
  let bestCount = -1;
  for (const [k, v] of counts) {
    if (v > bestCount) {
      best = k;
      bestCount = v;
    }
  }
  return best;
}

function generateCss({ colors, textStyles }) {
  const colorList = Array.from(colors).slice(0, 8); // cap to 8 brand colors
  const primaryFont = mostFrequent(textStyles, (t) => t.family) || "ui-sans-serif";
  const primarySize = mostFrequent(textStyles, (t) => `${Math.round(t.size)}`) || "16";

  const lines = [];
  lines.push("/* Generated from Figma export. Do not edit manually. */");
  lines.push(":root {")
  colorList.forEach((hex, i) => {
    lines.push(`  --brand-${i + 1}: ${hex};`);
  });
  lines.push(`  --font-primary: ${JSON.stringify(primaryFont)};`);
  lines.push(`  --text-base-size: ${primarySize}px;`);
  lines.push("}");
  lines.push("");
  lines.push("@theme inline {");
  // Expose brand colors to Tailwind via CSS variables
  colorList.forEach((_, i) => {
    lines.push(`  --color-brand-${i + 1}: var(--brand-${i + 1});`);
  });
  lines.push("  --font-sans: var(--font-primary);");
  lines.push("}");
  return lines.join("\n");
}

function main() {
  const raw = readFileSync(figmaJsonPath, "utf8");
  const json = JSON.parse(raw);

  const acc = { colors: new Set(), textStyles: [] };
  if (json && json.document) {
    walk(json.document, acc);
  }

  const css = generateCss(acc);
  mkdirSync(dirname(outputCssPath), { recursive: true });
  writeFileSync(outputCssPath, css, "utf8");
  console.log(`Wrote tokens to ${outputCssPath}`);
}

main();


