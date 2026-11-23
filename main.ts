// One-Line Laugh Sprint — make.fun entry (program/v1).
// Writes one original funny line about everyday life to /output/entry.txt.
//
// The line: the washing machine as a landlord. The setup is the universal
// laundry mystery (one sock always vanishes); the twist lands on the very
// last word — the surviving sock is the one paying rent.
//
// Gate check (verified locally before submit): the line is 94 characters
// of plain UTF-8, one line, not only whitespace — inside the 1–200 window.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My washing machine eats exactly one sock per load, like it is charging rent for the other one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
