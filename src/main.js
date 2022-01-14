const { Words } = require('./words');
const fs = require('fs');
const path = require('path');
const words = new Words();
const input = fs.readFileSync(path.join(__dirname, '../input/pattern.txt'), 'utf8').split('\n')[0];
console.log(words.match(input));
