#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require("fs");
const path = require("path");
const os = require("os");

const INJECT_LINE =
  'Brand context: !`cat .agents/brand-content-context.md 2>/dev/null || echo "No brand context found. Run /brand-content-context first to set up."`';

function parseArgs(argv) {
  const args = { target: null, source: null, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "-h" || a === "--help") args.help = true;
    else if (a === "--target") args.target = argv[++i];
    else if (a === "--source") args.source = argv[++i];
    else if (!args.source) args.source = a;
    else if (!args.target) args.target = a;
  }
  return args;
}

function printHelp() {
  console.log(`hiruno-content-skills — install skills into Claude Code

Usage:
  npx github:angelobaricante/hiruno-content-skills
  npx github:angelobaricante/hiruno-content-skills --target ~/.claude/skills

Options:
  --source <dir>   Source skills dir (default: bundled ./skills)
  --target <dir>   Target dir (default: ~/.claude/skills)
  -h, --help       Show this help
`);
}

function copyDir(src, dest) {
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function injectIntoSkill(content) {
  const lines = content.split("\n");
  let fmCount = 0;
  let inserted = false;
  const out = [];
  for (const line of lines) {
    out.push(line);
    if (!inserted && line === "---") {
      fmCount++;
      if (fmCount === 2) {
        out.push("");
        out.push(INJECT_LINE);
        out.push("");
        inserted = true;
      }
    }
  }
  return out.join("\n");
}

function buildSkill(skillName, srcDir, targetRoot) {
  const skillSrc = path.join(srcDir, skillName);
  const srcSkillMd = path.join(skillSrc, "SKILL.md");
  if (!fs.existsSync(srcSkillMd)) {
    console.log(`  skip: ${skillName} (no SKILL.md)`);
    return false;
  }
  const targetDir = path.join(targetRoot, skillName);
  fs.mkdirSync(targetDir, { recursive: true });

  for (const sub of ["references", "assets"]) {
    const subSrc = path.join(skillSrc, sub);
    if (fs.existsSync(subSrc) && fs.statSync(subSrc).isDirectory()) {
      copyDir(subSrc, path.join(targetDir, sub));
    }
  }

  const content = fs.readFileSync(srcSkillMd, "utf8");
  fs.writeFileSync(path.join(targetDir, "SKILL.md"), injectIntoSkill(content));
  console.log(`  built: ${skillName}`);
  return true;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  const packageRoot = path.resolve(__dirname, "..");
  const sourceDir = path.resolve(args.source || path.join(packageRoot, "skills"));
  const targetDir = path.resolve(
    args.target || path.join(os.homedir(), ".claude", "skills")
  );

  if (!fs.existsSync(sourceDir)) {
    console.error(`Error: source directory not found: ${sourceDir}`);
    process.exit(1);
  }

  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Installing skills`);
  console.log(`  from: ${sourceDir}`);
  console.log(`  to:   ${targetDir}\n`);

  let count = 0;
  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (buildSkill(entry.name, sourceDir, targetDir)) count++;
  }

  console.log(`\nDone. Built ${count} skills into ${targetDir}`);
  console.log(
    `Each SKILL.md auto-injects .agents/brand-content-context.md at runtime.`
  );
}

main();
