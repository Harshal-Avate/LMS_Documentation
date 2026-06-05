const fs = require('fs');
const path = require('path');

const docsDir = path.join('d:/LMS_Document/docs-portal/app/docs');

let changedFiles = 0;
function fixMdx(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixMdx(fullPath);
    } else if (file.endsWith('.mdx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;

      // Fix .png) outside parenthesis: ).png)
      // From ![Visual Guide](/images/students/student-dashboard-overview).png) 
      // To   ![Visual Guide](/images/students/student-dashboard-overview.png)
      content = content.replace(/\)\.png\)/g, '.png)');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        changedFiles++;
        console.log('Fixed', fullPath);
      }
    }
  });
}

fixMdx(docsDir);
console.log('Fixed', changedFiles, 'MDX files.');
