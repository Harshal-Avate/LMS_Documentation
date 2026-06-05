const fs = require('fs');
const files = [
  'd:/LMS_Document/docs-portal/app/docs/faq/page.mdx',
  'd:/LMS_Document/docs-portal/app/docs/getting-started/dashboard/page.mdx',
  'd:/LMS_Document/docs-portal/app/docs/getting-started/introduction/page.mdx',
  'd:/LMS_Document/docs-portal/app/docs/getting-started/login/page.mdx',
  'd:/LMS_Document/docs-portal/app/docs/mentor/student-registry/page.mdx',
  'd:/LMS_Document/docs-portal/app/docs/student/analytics/page.mdx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\uFFFD/g, '—');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Cleaned uFFFD in:', file);
});
