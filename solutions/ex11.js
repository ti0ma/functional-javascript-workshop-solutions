module.exports = function arrayMap(arr, fn) {
  return arr.reduce((list, item, index, array) => {
    list.push(fn.call(this, item, index, array));
    return list;
  }, []);
}
