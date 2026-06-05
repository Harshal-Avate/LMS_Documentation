const fs = require('fs');
const path = require('path');

function searchBytes(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('.git')) {
        searchBytes(fullPath);
      }
    } else if (fullPath.endsWith('.mdx') || fullPath.endsWith('.md') || fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath);
      // c3 a2 e2 80
      for(let i=0; i<content.length-3; i++) {
        if(content[i] === 0xc3 && content[i+1] === 0xa2 && content[i+2] === 0xe2 && content[i+3] === 0x80) {
          console.log('Found bytes c3 a2 e2 80 in:', fullPath);
          break;
        }
      }
    }
  });
}

searchBytes('d:/LMS_Document');
