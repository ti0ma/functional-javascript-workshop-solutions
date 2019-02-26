function repeat(operation, num) {
  if (num <= 0) return;
  operation();
  return setImmediate(repeat.bind(null, operation, --num));
}

module.exports = repeat;
