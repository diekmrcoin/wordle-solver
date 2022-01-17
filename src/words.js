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
   * @param {string} patter
   * @param {string[]} ignoreLetters
   * @returns {string[]}
   */
  match(patter, ignoreLetters) {
    // TODO: accents are not supported
    return Object.keys(this.words)
      .filter(word =>
        word.match(patter) &&
        !ignoreLetters.some(letter => word.includes(letter)),
      );
  }
}

module.exports.Words = Words;
