const fs = require('fs');
const path = require('path');

function cleanFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace remaining '?' that look like broken arrows
  content = content.replace(/ \? /g, ' \u2192 ');
  content = content.replace(/\?\]/g, '\u2192]');
  content = content.replace(/\? \*\*/g, '\u2192 **');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed in:', file);
  }
}

function walk(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
        walk(file);
      }
    } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
      cleanFile(file);
    }
  });
}

walk('d:/LMS_Document');
console.log('Final check done.');
