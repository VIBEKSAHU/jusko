const { sign, verify } = require("jsonwebtoken");
console.log("Creating Token");
const createTokens = (username) => {
  const accessToken = sign({ username: username }, "JUSCO");
  console.log(accessToken);
  return accessToken;
};
module.exports = { createTokens };
