#!/usr/bin/env node
// Export a hero PNG from a Figma file using the Images API.
// Requires env FIGMA_TOKEN. Uses local file export to resolve a node id.

import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileKey = process.env.FIGMA_FILE_KEY || "KyKloVzzC6TWfVELZwMRTI";
const token = process.env.FIGMA_TOKEN;
if (!token) {
  console.error("Missing FIGMA_TOKEN env var");
  process.exit(1);
}

const localJsonPath = resolve(__dirname, "../../.design/figma/file.json");
const outputDir = resolve(__dirname, "../public/assets");
const outputPath = resolve(outputDir, "hero.png");

function findHeroNode(node) {
  let candidate = null;
  function dfs(n) {
    if (!n || typeof n !== "object") return;
    const name = (n.name || "").toString();
    if (!candidate && /hero/i.test(name) && (n.type === "FRAME" || n.type === "GROUP")) {
      candidate = n;
      return;
    }
    if (!candidate && n.type === "FRAME") {
      candidate = candidate || n; // fallback first frame seen
    }
    if (Array.isArray(n.children)) {
      for (const c of n.children) dfs(c);
    }
  }
  dfs(node);
  return candidate;
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { "X-Figma-Token": token } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

async function fetchBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for image`);
  const arrayBuf = await res.arrayBuffer();
  return Buffer.from(arrayBuf);
}

async function main() {
  const file = JSON.parse(readFileSync(localJsonPath, "utf8"));
  const hero = findHeroNode(file.document);
  if (!hero || !hero.id) {
    console.error("Could not locate a hero frame in the local file export.");
    process.exit(1);
  }
  const ids = encodeURIComponent(hero.id);
  const api = `https://api.figma.com/v1/images/${fileKey}?ids=${ids}&format=png&scale=2`;
  const data = await fetchJson(api);
  const imgUrl = data?.images?.[hero.id];
  if (!imgUrl) {
    console.error("Images API did not return a URL for the hero node");
    process.exit(1);
  }
  const buf = await fetchBuffer(imgUrl);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, buf);
  console.log(`Saved hero image → ${outputPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


