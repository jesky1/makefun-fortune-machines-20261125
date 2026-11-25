import { execFileSync, spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import test from "node:test";
import assert from "node:assert/strict";
import { FORTUNE, OUTPUT_PATH, validateFortune } from "../main.ts";

function runProgram() {
  const r = spawnSync(process.execPath, ["main.ts"], {
    cwd: new URL("..", import.meta.url).pathname,
    encoding: "utf8",
  });
  assert.equal(r.status, 0, r.stderr);
}

test("entry is a single line of 1-200 characters", () => {
  const chars = [...FORTUNE].length;
  assert.ok(chars >= 1 && chars <= 200, `length ${chars}`);
  assert.equal(FORTUNE, FORTUNE.trim());
  assert.ok(!FORTUNE.includes("\n"));
  assert.equal(chars, 100);
});

test("program writes the exact fortune with no trailing newline", () => {
  runProgram();
  const out = readFileSync(OUTPUT_PATH, "utf8");
  assert.equal(out, FORTUNE);
  assert.ok(!out.endsWith("\n"));
});

test("program is deterministic across runs", () => {
  runProgram();
  const first = readFileSync(OUTPUT_PATH);
  runProgram();
  const second = readFileSync(OUTPUT_PATH);
  assert.deepEqual(first, second);
});

test("validator accepts the shipped fortune", () => {
  assert.equal(validateFortune(FORTUNE), true);
});

test("validator rejects over-long, empty, whitespace-only and multi-line text", () => {
  assert.throws(() => validateFortune("x".repeat(201)), /at most 200/);
  assert.throws(() => validateFortune(""), /empty/);
  assert.throws(() => validateFortune("   \t  "), /only whitespace/);
  assert.throws(() => validateFortune("line one\nline two"), /single line/);
  assert.throws(() => validateFortune(" padded "), /leading or trailing/);
});
