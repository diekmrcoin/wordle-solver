const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(path.join(__dirname));
for (const file of files) {
  if (!file.endsWith('.txt')) continue;
  if (file.includes('clean')) continue;
  const words = fs.readFileSync(path.join(__dirname, file), 'utf8').split('\n');
  // filter words with length = 5
  let cleanWords = words.filter(word => {
    if (word.includes(',')) word = word.split(',')[0];
    return word.length === 5;
  }).map(word => {
    if (word.includes(',')) word = word.split(',')[0];
    word = word.toLowerCase();
    word = word.replace(/[àáâãäå]/g, 'a');
    word = word.replace(/[èéêë]/g, 'e');
    word = word.replace(/[ìíîï]/g, 'i');
    word = word.replace(/[òóôõö]/g, 'o');
    word = word.replace(/[ùúûü]/g, 'u');
    return word;
  });
  // TODO: add feminine words instead of just ignore them
  // exclude words with -, _, or .
  cleanWords = cleanWords.filter(word => !word.includes('-') && !word.includes('_') && !word.includes('.'));
  // exclude words with numbers
  cleanWords = cleanWords.filter(word => !word.match(/\d/));
  // write clean words to file
  fs.writeFileSync(path.join(__dirname, file.replace('.txt', '_clean.txt')), cleanWords.join('\n'));
}
