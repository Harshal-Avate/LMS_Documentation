import zipfile
import xml.etree.ElementTree as ET

with zipfile.ZipFile(r"d:\LMS_Document\LMS_Document (Bug's report).docx") as docx:
    tree = ET.fromstring(docx.read('word/document.xml'))

namespace = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
for paragraph in tree.iterfind('.//w:p', namespace):
    texts = [node.text for node in paragraph.iterfind('.//w:t', namespace) if node.text]
    if texts:
        print(''.join(texts))
