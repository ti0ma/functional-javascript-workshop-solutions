function getDependencies(tree = {}) {
  const { dependencies = {} } = tree;
  const toReturn = [];

  Object.keys(dependencies).forEach((key) => {
    const dependency = dependencies[key];
    toReturn.push(
      `${key}@${dependency.version}`,
      ...getDependencies(dependency)
    );
  });

  return toReturn
    // Unique
    .filter((item, index, arr) => arr.indexOf(item) === index)
    // Sort alphabetically
    .sort();
}

module.exports = getDependencies;
