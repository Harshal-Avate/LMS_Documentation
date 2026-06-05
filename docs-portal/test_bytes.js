const fs = require('fs');
const content = fs.readFileSync('d:/LMS_Document/docs-portal/app/docs/getting-started/introduction/page.mdx');
const str = content.toString('utf8');
const idx = str.indexOf('**SimpleSphere Learning**');
console.log(content.slice(idx, idx + 40));
