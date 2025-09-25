const jwt = require("jsonwebtoken");
const Temple = require("../models/temple");
const Token = require("../models/token");
const ExpressError = require("../utils/ExpressError");

module.exports.isAdmin = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    next(new ExpressError(401, `Unauthorized!`));
  }
  const token = authHeader.split(" ")[1];
  const templeId = req.params.id;
  const userId = jwt.decode(token).sub;

  const temple = await Temple.findById(templeId);
  if (!temple) return res.status(404).send(`Temple not found`);
  console.log(temple.admin);
  console.log(userId);
  if (temple.admin.toString() === userId) {
    return next();
  } else {
    res.status(401).send(`You're not the admin!`);
  }
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: `Unauthorized` });
  const jwtToken = authHeader.split(" ")[1];
  const userId = jwt.decode(jwtToken).sub;

  const token = await Token.findById(id);
  const temple = await Temple.findById(token.litAt);
  if (!token) return res.status(404).json({ message: `Jyot not found!` });
  if (token.litBy.toString() === userId || temple.admin.toString() === userId)
    return next();
  else
    res
      .status(401)
      .json({
        message: `You're not the owner of this Jyot and neither the admin!`,
      });
};
