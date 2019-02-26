function Spy(target, method) {
  const original = target[method];
  const spy = {
    count: 0
  };

  target[method] = function() {
    original.apply(target, arguments);
    spy.count++;
  };

  return spy;
}

module.exports = Spy;
