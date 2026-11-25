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

// Gate: the competition scorer accepts UTF-8 text of 1-200 characters,
// not only white space, on a single line. Reject anything outside it
// before anything is written, so a bad fortune can never reach the gate.
export function validateFortune(text) {
  const chars = [...text].length;
  if (chars < 1) throw new Error("fortune must not be empty");
  if (chars > 200) throw new Error(`fortune must be at most 200 characters, got ${chars}`);
  if (text.trim().length === 0) throw new Error("fortune must not be only whitespace");
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("fortune must be a single line");
  }
  if (text !== text.trim()) throw new Error("fortune must not have leading or trailing whitespace");
  return true;
}

export function writeFortune() {
  validateFortune(FORTUNE);
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
