const fs = require('fs');
const path = require('path');

function replaceMojibake(file) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  content = content.replace(/â†’/g, '?');
  content = content.replace(/â€”/g, '—');
  content = content.replace(/â€“/g, '–');
  content = content.replace(/â€œ/g, '"');
  content = content.replace(/â€/g, '"');
  content = content.replace(/â€™/g, "'");
  content = content.replace(/Ã—/g, '×');
  content = content.replace(/âŒ˜/g, '?');
  content = content.replace(/â”œâ”€â”€/g, '+--');
  content = content.replace(/â””â”€â”€/g, '+--');
  content = content.replace(/\+'\uFFFD/g, '?');
  content = content.replace(/\uFFFD\+'/g, '?');
  content = content.replace(/\?'/g, '—');
  content = content.replace(/\?\uFFFD/g, '—');
  content = content.replace(/\uFFFD\?"/g, '—');
  content = content.replace(/A,\?\?/g, '—');
  content = content.replace(/"o"\?"\?/g, '+--');
  content = content.replace(/"""\?"\?/g, '+--');
  content = content.replace(/\uFFFD/g, "'");

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed:', file);
  }
}

function walk(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next')) {
        walk(file);
      }
    } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
      replaceMojibake(file);
    }
  });
}

walk('d:/LMS_Document');
console.log('Done replacing mojibake.');
