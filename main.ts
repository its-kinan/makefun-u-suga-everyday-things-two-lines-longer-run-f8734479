// Everyday Things, Two Lines — washing machine as a merry-go-round.
// Writes exactly two lines to /output/entry.txt, deterministic, no I/O
// besides the single output file.
import { mkdirSync, writeFileSync } from "node:fs";

const line1 =
  "A washing machine is like a merry-go-round for your clothes, spinning them round and round in soapy water until the dirt flies off and they come out clean.";
const line2 =
  "The spinning matches how clothes tumble and get flung about, but a merry-go-round has no water, no soap, and no final spin that wrings them dry, so it could never wash a single sock.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line1 + "\n" + line2 + "\n", "utf8");
