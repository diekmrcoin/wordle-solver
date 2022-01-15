const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(path.join(__dirname));
for (const file of files) {
  if (!file.endsWith('.txt')) continue;
  if (file.includes('clean')) continue;
  const words = fs.readFileSync(path.join(__dirname, file), 'utf8').split('\n');
  // filter words with length = 5
  let cleanWords = words.filter(word => word.length === 5);
  // exclude words with -, _, or .
  cleanWords = cleanWords.filter(word => !word.includes('-') && !word.includes('_') && !word.includes('.'));
  // exclude words with numbers
  cleanWords = cleanWords.filter(word => !word.match(/\d/));
  // write clean words to file
  fs.writeFileSync(
    path.join(__dirname, file.replace('.txt', '_clean.txt')),
    cleanWords.map(word => word.toLowerCase()).join('\n'),
  );
}
