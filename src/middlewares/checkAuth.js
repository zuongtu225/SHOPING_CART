const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkAuthentication = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.sendStatus(401);
  }
  const tokenParts = authHeader.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return res.sendStatus(401);
  }

  const token = tokenParts[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json("Token is not valid");
    }
    req.user = user;
    next();
  });
};

module.exports = checkAuthentication;
