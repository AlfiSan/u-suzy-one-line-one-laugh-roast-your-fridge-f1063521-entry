import { mkdirSync, writeFileSync } from "node:fs";

const line = "My fridge beeps at me for leaving the door open, like the half-empty bottle of sauce inside is going to escape.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
