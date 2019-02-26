function checkUsersValid(goodUsers) {
  const goodIds = goodUsers.reduce((prev, {id}) => {
    return { ...prev, [id]: true };
  }, {});

  return function allUsersValid(submittedUsers) {
    const goodSubmittedUsers = submittedUsers.filter(({ id }) => goodIds[id]);
    return goodSubmittedUsers.length === submittedUsers.length;
  };
}

module.exports = checkUsersValid;
