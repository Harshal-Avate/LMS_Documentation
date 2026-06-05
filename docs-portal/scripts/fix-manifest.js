const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '../.next/routes-manifest.json');
if (fs.existsSync(manifestPath)) {
  const data = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  if (!data.dataRoutes || !data.dynamicRoutes) {
    if (!data.dataRoutes) data.dataRoutes = [];
    if (!data.dynamicRoutes) data.dynamicRoutes = [];
    fs.writeFileSync(manifestPath, JSON.stringify(data), 'utf8');
    console.log('Fixed Next.js routes-manifest.json dataRoutes and dynamicRoutes bug');
  }
}
