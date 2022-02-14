const fs = require('fs');
const path = require('path');

class Words {
  constructor() {
    this.words = {};
    this.loadWords();
  }

  loadWords() {
    fs.readdirSync(path.join(__dirname, '../esp_words')).forEach(file => {
      if (!file.endsWith('.txt')) return;
      if (!file.includes('clean')) return;
      fs.readFileSync(path.join(__dirname, '../esp_words', file), 'utf8').split('\n').forEach(word => {
        if (word.match(/^[a-z]{5}$/i))
          this.words[word] = true;
      });
    });
  }

  /**
   * @param {string} pattern
   * @param {string[]} excludePatterns
   * @param {string[]} includeLetters
   * @param {string[]} ignoreLetters
   * @returns {string[]}
   */
  match(pattern, excludePatterns, includeLetters, ignoreLetters) {
    return Object.keys(this.words)
      .filter(word => {
          let match = word.match(pattern);
          if (match && excludePatterns.length > 0)
            match = !excludePatterns.some(excludePattern => word.match(excludePattern));
          if (match && includeLetters.length > 0)
            match = includeLetters.every(letter => word.includes(letter));
          if (match && ignoreLetters.length > 0)
            match = !ignoreLetters.some(letter => word.includes(letter));
          return match;
        },
      );
  }
}

module.exports.Words = Words;
