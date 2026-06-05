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
  const content = fs.readFileSync(file, 'utf8');
  const idx = content.indexOf('\uFFFD');
  if (idx !== -1) {
    console.log(file, ':', content.slice(Math.max(0, idx - 15), idx + 15));
  }
});
