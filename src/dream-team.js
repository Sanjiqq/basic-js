module.exports = function createDreamTeam(members) {
  let result = new Array();
  if (Array.isArray(members)) {
    members.forEach(members => {
      if (typeof members === "string") {
        members = members.trim();
        result.push(members[0].toUpperCase());
      }
    });
    return result.sort().join("");
  } else return false;
};
