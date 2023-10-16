import jwt from "jsonwebtoken";
const generateAccessToken = (id, firstName, lastName, email, roleId) => {
  const user = jwt.sign(
    {
      id,
      firstName,
      lastName,
      email,
      roleId,
    },
    process.env.ACCESS_TOKEN_SECRET
  );
  return user;
};
module.exports = { generateAccessToken };
