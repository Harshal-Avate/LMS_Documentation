const fs = require('fs');
const path = require('path');

function replaceMojibake(file) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // â is \u00e2, † is \u2020
  content = content.replace(/\u00e2\u2020'/g, '?'); // â†'
  content = content.replace(/\u00e2\u2020\u2192/g, '?'); // â†’
  content = content.replace(/\u00e2\u20ac\u201d/g, '—'); // â€” (em dash)
  content = content.replace(/\u00e2\u20ac\u201c/g, '–'); // â€“ (en dash)
  content = content.replace(/\u00e2\u20ac\u0153/g, '"'); // â€œ
  content = content.replace(/\u00e2\u20ac/g, '"');  // â€ (partial quote)
  content = content.replace(/\u00e2\u20ac\u2122/g, "'"); // â€™
  content = content.replace(/\u00c3\u0097/g, '×');  // Ã—
  content = content.replace(/\u00e2\u0152\u02dc/g, '?');  // âŒ˜
  content = content.replace(/\u00e2\u201d\u0153\u00e2\u201d\u20ac\u00e2\u201d\u20ac/g, '+--'); // â”œâ”€â”€
  content = content.replace(/\u00e2\u201d\u201d\u00e2\u201d\u20ac\u00e2\u201d\u20ac/g, '+--'); // â””â”€â”€
  
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
      if (!file.includes('node_modules') && !file.includes('.next')) {
        walk(file);
      }
    } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
      replaceMojibake(file);
    }
  });
}

walk('d:/LMS_Document');
console.log('Done.');
