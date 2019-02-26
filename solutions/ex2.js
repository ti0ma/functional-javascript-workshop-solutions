function repeat(operation, num) {
  // Just wanted a one-liner ;)
  return num > 0 && operation() && repeat(operation, --num);
}

module.exports = repeat;
