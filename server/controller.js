const dictionary = require('./dictionary');

var anagrams = {};
var twos = [];
var threes = [];
var fours = [];
var fives = [];
var sixes = [];
var sevens = [];

module.exports = {
  solver: (req, res) => {
    const input = req.body;

    for (w = 0; w < dictionary.length; w++) {
      var letters = input.split('');
      var word = dictionary[w].split('');

      for (i = 0; i < letters.length; i++) {
        for (j = 0; j < word.length; j++) {
          if (letters[i] === word[j]) {
            word[j] = ' ';
            break;
          }
        }
      }
      processedWord = word.join('');
      wordLen = processedWord.length;
      if (processedWord.trim().length == 0) {
        switch (wordLen) {
          case 2:
            twos.push(dictionary[w]);
            break;
          case 3:
            threes.push(dictionary[w]);
            break;
          case 4:
            fours.push(dictionary[w]);
            break;
          case 5:
            fives.push(dictionary[w]);
            break;
          case 6:
            sixes.push(dictionary[w]);
            break;
          case 7:
            sevens.push(dictionary[w]);
            break;
        }
      }
    }

    anagrams['twos'] = twos;
    anagrams['threes'] = threes;
    anagrams['fours'] = fours;
    anagrams['fives'] = fives;
    anagrams['sixes'] = sixes;
    anagrams['sevens'] = sevens;
    // console.log(anagrams);
    res.status(200);
  },
  getAnagrams: (req, res) => {
    res.status(200).send(anagrams);
  },
};
