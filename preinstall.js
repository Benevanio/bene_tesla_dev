
const fs = require('fs');
const path = require('path');

const problematicPath = path.join(__dirname, 'node_modules', 'transformers');
if (fs.existsSync(problematicPath)) {
  fs.rmdirSync(problematicPath, { recursive: true });
}