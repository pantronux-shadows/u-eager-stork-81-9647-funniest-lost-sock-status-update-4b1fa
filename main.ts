// Funniest Lost Sock Status Update — program/v1 entry.
// Writes one status update of at most 120 characters to <output>/entry.txt.
// The output directory comes from MAKEFUN_OUTPUT_DIR, falling back to /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Lost sock update, day 47: I know where the other one is. I'm not telling. The dryer taught me silence.";

if (LINE.length === 0 || LINE.trim().length === 0) {
  throw new Error("entry must not be empty or only white space");
}

if (LINE.length > 120) {
  throw new Error(`entry is ${LINE.length} characters, over the 120 cap`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
