const fs = require('fs');
const path = require('path');

function replaceMojibake(file) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // The actual byte sequences found in the file:
  content = content.replace(/â†'/g, '?'); // arrow with regular apostrophe
  content = content.replace(/â†’/g, '?'); // arrow with curly quote
  content = content.replace(/â€”/g, '—'); // em dash
  content = content.replace(/â€“/g, '–'); // en dash
  content = content.replace(/â€œ/g, '"'); // left quote
  content = content.replace(/â€/g, '"');  // right quote (or partial)
  content = content.replace(/â€™/g, "'"); // curly apostrophe
  content = content.replace(/Ã—/g, '×');  // multiply
  content = content.replace(/âŒ˜/g, '?');  // command
  content = content.replace(/â”œâ”€â”€/g, '+--');
  content = content.replace(/â””â”€â”€/g, '+--');
  content = content.replace(/â€\?/g, '—'); // another dash corruption
  content = content.replace(/â€"/g, '—'); // dash corruption
  
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
