const jwt = require("jsonwebtoken");
const redisClient = require("../config/redis");
const ExpressError = require("../utils/ExpressError");

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    next(new ExpressError(401, "Unauthorized"));
  }

  try {
    const isBlacklisted = await redisClient.get(token);
    if (isBlacklisted) {
      next(new ExpressError(401, "Token is blacklisted. Please login again!"));
    }

    jwt.verify(token, process.env.ACCESS_TOKEN, async (err, decoded) => {
      if (err) {
        return next(new ExpressError(401, `Access Token invalid`));
      }
      req.user = decoded;
      next();
    });
  } catch (err) {
    console.log(err);
    throw new ExpressError(500, `Internal Server Error`);
  }
};

module.exports = authenticateToken;
