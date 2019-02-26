function reduce(arr, fn, initial) {
  function execReduce(index, value) {
    if (index === arr.length) {
      return value;
    }

    const result = fn(value, arr[index], index, arr);
    return execReduce(++index, result);
  }

  return execReduce(0, initial);
}

module.exports = reduce;
