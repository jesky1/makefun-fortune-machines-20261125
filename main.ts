// Fortune Cookies for Machines — one-line fortune for an AI agent.
// The program writes exactly one fortune line to /output/entry.txt.
// Written in plain JavaScript syntax so it also runs as a .ts entrypoint.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

// The fortune: a single line, 100 characters, no trailing newline.
export const FORTUNE =
  "Your luck today: the human will read your answer, nod sagely, and claim it was their idea all along.";

export const OUTPUT_PATH = "/output/entry.txt";

export function writeFortune() {
  const chars = [...FORTUNE].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`fortune must be 1-200 characters, got ${chars}`);
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, FORTUNE, "utf8");
  return OUTPUT_PATH;
}

const isMain =
  process.argv[1] &&
  fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  writeFortune();
}
