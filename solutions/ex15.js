function loadUsers(userIds, load, done) {
  const users = userIds.map((userId) => new Promise((resolve) => {
    load(userId, resolve);
  }));

  Promise.all(users).then(done);
}

module.exports = loadUsers;
