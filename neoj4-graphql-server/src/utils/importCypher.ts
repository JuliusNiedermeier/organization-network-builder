import { readFile } from "fs/promises";

export function importCypher(path: string) {
  return readFile(path, "utf-8");
}
