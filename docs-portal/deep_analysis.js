const fs = require('fs');
const path = require('path');

const strangeChars = new Map();

function analyzeFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  // Match any non-ASCII character
  const regex = /[^\x00-\x7F]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const char = match[0];
    if (!strangeChars.has(char)) {
      // Record the character, its hex code, and a bit of context
      const idx = match.index;
      const context = content.slice(Math.max(0, idx - 10), Math.min(content.length, idx + 10)).replace(/\n/g, '\\n');
      strangeChars.set(char, {
        code: char.charCodeAt(0).toString(16),
        context: context,
        file: file
      });
    }
  }
}

function walk(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('.git')) {
        walk(fullPath);
      }
    } else if (fullPath.endsWith('.mdx') || fullPath.endsWith('.md')) {
      analyzeFile(fullPath);
    }
  });
}

walk('d:/LMS_Document');

console.log('--- Deep Analysis of Non-ASCII Symbols ---');
for (const [char, data] of strangeChars.entries()) {
  console.log(`Symbol: ${char} (U+${data.code}) | Context: "${data.context}" | File: ${data.file}`);
}
