import { mkdirSync, writeFileSync } from "node:fs";

const rant =
  "The microwave finished three minutes ago and it is still beeping, five times, like the lasagne might escape. I am two feet away. I heard you the first time. Nobody has ever been saved by the fifth beep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", rant, "utf8");
