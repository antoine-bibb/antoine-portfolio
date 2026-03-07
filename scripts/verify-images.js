const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '..', 'assets', 'product-image-manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const missing = [];

for (const colors of Object.values(manifest)) {
  for (const filePath of Object.values(colors)) {
    const abs = path.join(__dirname, '..', filePath);
    if (!fs.existsSync(abs)) missing.push(filePath);
  }
}

if (!missing.length) {
  console.log('All manifest images exist.');
  process.exit(0);
}

console.log(`Missing ${missing.length} images:`);
for (const m of missing) console.log(`- ${m}`);
process.exit(1);
