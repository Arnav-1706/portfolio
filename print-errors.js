const fs = require('fs');
try {
  let content = fs.readFileSync('lint.json', 'utf16le');
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  const data = JSON.parse(content);
  data.forEach(file => {
    if (file.errorCount > 0) {
      console.log(file.filePath);
      file.messages.forEach(m => console.log(`  Line ${m.line}: ${m.message}`));
    }
  });
} catch(e) {
  console.error("Error reading lint.json", e.message);
}
