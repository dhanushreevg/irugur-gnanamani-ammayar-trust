import fs from "node:fs";
const en = JSON.parse(fs.readFileSync("content/en.json"));
const ta = JSON.parse(fs.readFileSync("content/ta.json"));
const keys = (value, prefix = "") => Object.entries(value).flatMap(([key, child]) => typeof child === "object" && child !== null && !Array.isArray(child) ? keys(child, `${prefix}${key}.`) : [`${prefix}${key}`]);
const a = new Set(keys(en)); const b = new Set(keys(ta));
const missing = [...a].filter((key) => !b.has(key)); const extra = [...b].filter((key) => !a.has(key));
if (missing.length || extra.length) { console.error({ missing, extra }); process.exit(1); }
console.log("Translation keys match.");
