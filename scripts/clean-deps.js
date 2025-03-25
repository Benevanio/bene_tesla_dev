
const fs = require('fs');
const path = require('path');

try {
  const problematicDeps = [
    'transformers',
    'uglify-js',
    'constantinople'
  ];

  problematicDeps.forEach(dep => {
    const depPath = path.join(__dirname, '..', 'node_modules', dep);
    if (fs.existsSync(depPath)) {
      fs.rmSync(depPath, { recursive: true, force: true });
      console.log(`Removido: ${depPath}`);
    }
  });
} catch (e) {
  console.error('Erro no preinstall:', e.message);
  process.exit(0); 
}