function duckCount() {
  return Object.values(arguments).filter((arg) => {
    return Object.prototype.hasOwnProperty.call(arg, 'quack');
  }).length;
}

module.exports = duckCount;
