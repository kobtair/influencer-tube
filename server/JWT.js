const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();

const createTokens = (user) => {
  const accessToken = sign(
    { email: user.email, id: user._id },
    process.env.JWT_SECRET
  );
  return accessToken;
};

module.exports = createTokens;