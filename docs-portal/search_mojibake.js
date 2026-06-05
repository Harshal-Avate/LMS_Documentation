const fs = require('fs');
const path = require('path');

function searchMojibake(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.next')) {
        searchMojibake(fullPath);
      }
    } else if (fullPath.endsWith('.mdx') || fullPath.endsWith('.md') || fullPath.endsWith('.tsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('\uFFFD')) {
        console.log('Found U+FFFD in:', fullPath);
      }
    }
  });
}

searchMojibake('d:/LMS_Document/docs-portal');
