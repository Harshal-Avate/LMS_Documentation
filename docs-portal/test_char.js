const fs = require('fs');
const content = fs.readFileSync('d:/LMS_Document/docs-portal/app/docs/faq/page.mdx', 'utf8');
const idx = content.indexOf('My Courses');
for(let i=0; i<20; i++){
  console.log(content.charCodeAt(idx + i).toString(16));
}
