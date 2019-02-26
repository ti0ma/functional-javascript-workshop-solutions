function countWords(inputWords) {
  return inputWords.reduce((prev, curr) => {
    prev[curr] = ++prev[curr] || 1;

    return prev;
  }, {});
}

module.exports = countWords;
