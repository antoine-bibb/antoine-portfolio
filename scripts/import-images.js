const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const manifestPath = path.join(repoRoot, 'assets', 'product-image-manifest.json');

function usage() {
  console.log('Usage: node scripts/import-images.js [--from <folder>] [--dry-run]');
  console.log('Default source folder: ./downloads');
}

function getArg(flag) {
  const idx = process.argv.indexOf(flag);
  if (idx === -1) return null;
  return process.argv[idx + 1] || null;
}

function hasFlag(flag) {
  return process.argv.includes(flag);
}

if (hasFlag('--help') || hasFlag('-h')) {
  usage();
  process.exit(0);
}

const fromArg = getArg('--from');
const sourceDir = path.resolve(fromArg ? fromArg : path.join(repoRoot, 'downloads'));
const dryRun = hasFlag('--dry-run');

if (!fs.existsSync(manifestPath)) {
  console.error(`Manifest not found: ${manifestPath}`);
  process.exit(1);
}

if (!fs.existsSync(sourceDir)) {
  console.error(`Source folder not found: ${sourceDir}`);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const sourceFiles = fs.readdirSync(sourceDir).filter((name) => fs.statSync(path.join(sourceDir, name)).isFile());

const sourceByName = new Map(sourceFiles.map((name) => [name.toLowerCase(), name]));
const sourceByStem = new Map();

for (const name of sourceFiles) {
  const stem = path.parse(name).name.toLowerCase();
  if (!sourceByStem.has(stem)) sourceByStem.set(stem, []);
  sourceByStem.get(stem).push(name);
}

let copied = 0;
let skipped = 0;
const missing = [];

for (const colors of Object.values(manifest)) {
  for (const targetRelative of Object.values(colors)) {
    const targetAbs = path.join(repoRoot, targetRelative);
    const targetName = path.basename(targetRelative);
    const targetStem = path.parse(targetName).name.toLowerCase();

    let chosenSource = sourceByName.get(targetName.toLowerCase()) || null;
    if (!chosenSource) {
      const stemMatches = sourceByStem.get(targetStem);
      if (stemMatches && stemMatches.length) chosenSource = stemMatches[0];
    }

    if (!chosenSource) {
      missing.push(targetRelative);
      continue;
    }

    const sourceAbs = path.join(sourceDir, chosenSource);
    const targetDir = path.dirname(targetAbs);

    if (!dryRun) {
      if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
      fs.copyFileSync(sourceAbs, targetAbs);
    }
    copied += 1;
  }
}

for (const rel of missing) {
  skipped += 1;
  console.log(`Missing source for: ${rel}`);
}

console.log(`Source folder: ${sourceDir}`);
console.log(`Copied: ${copied}`);
console.log(`Missing: ${skipped}`);
console.log(dryRun ? 'Mode: dry-run (no files were written)' : 'Mode: write');

process.exit(skipped ? 1 : 0);
