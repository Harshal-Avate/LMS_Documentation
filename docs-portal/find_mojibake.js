const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.mdx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('d:/LMS_Document/docs-portal/app/docs');
const strangePatterns = new Set();
const pattern = /[^\x00-\x7F]+/g;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = pattern.exec(content)) !== null) {
    strangePatterns.add(match[0]);
  }
});

console.log('Found non-ASCII sequences:');
console.log(Array.from(strangePatterns).join('  ||  '));
