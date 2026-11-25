import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line robot wedding vow: a vow to back up the heart to the beloved's
// cloud every night, with the laugh landing on the last words.
const VOW =
  "I vow to back up my heart to your cloud every night, and never restore it from an ex.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), VOW + "\n", "utf8");
