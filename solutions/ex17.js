function curryN(fn, n = fn.length) {
  return function curry(prevArgs = []) {
    return function(arg) {
      // We don't reuse the array because we need to have the arguments of each layer.
      const args = prevArgs.concat(arg);
      if (args.length === n) {
        return fn.apply(null, args);
      }
      return curry(args);
    }
  }();
}

module.exports = curryN;
