const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join('d:/LMS_Document/docs-portal/public/images');
const docsDir = path.join('d:/LMS_Document/docs-portal/app/docs');

function sanitizeName(name) {
  return name.toLowerCase()
    .replace(/ & /g, '-and-')
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-')
    .replace(/_/g, '-')
    .replace(/[^\w\-\.]/g, ''); // Remove any other weird characters but keep dots
}

// 1. Rename files and build a map
const nameMap = new Map();

function processImages(dir, relativePath = '') {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processImages(fullPath, path.join(relativePath, file));
    } else if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const cleanFile = sanitizeName(file);
      if (cleanFile !== file) {
        const newFullPath = path.join(dir, cleanFile);
        fs.renameSync(fullPath, newFullPath);
        nameMap.set(file, cleanFile);
        
        // Also map url-encoded versions just in case
        nameMap.set(encodeURI(file), cleanFile);
        nameMap.set(file.replace(/ /g, '%20'), cleanFile);
      }
    }
  });
}

processImages(publicImagesDir);
console.log('Renamed images. Map size:', nameMap.size);

// 2. Update MDX files
let changedFiles = 0;
function processMdx(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processMdx(fullPath);
    } else if (file.endsWith('.mdx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;

      // Find all image tags: ![Alt](/images/folder/filename.png)
      content = content.replace(/!\[.*?\]\(\/images\/([^/]+)\/([^)]+)\)/g, (match, folder, filename) => {
        let decoded;
        try {
          decoded = decodeURIComponent(filename);
        } catch(e) {
          decoded = filename;
        }
        
        let newFilename = sanitizeName(decoded);
        return match.replace(filename, newFilename);
      });

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        changedFiles++;
      }
    }
  });
}

processMdx(docsDir);
console.log('Updated', changedFiles, 'MDX files.');
