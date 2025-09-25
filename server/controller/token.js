const Token = require("../models/token");
const Temple = require("../models/temple");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const ExpressError = require("../utils/ExpressError");

module.exports.index = async (req, res) => {
  const { id } = req.params;
  try {
    let user = await User.findById(id).populate("tokens");
    if (user) {
      res.status(200).send(user.tokens);
    }
  } catch (error) {
    console.log(error);
    throw new ExpressError(500, err._message);
  }
};

module.exports.newToken = async (req, res) => {
  let templeId = req.params.id;
  try {
    const authHeader = req.headers["authorization"];
    const jwtToken = authHeader && authHeader.split(" ")[1];
    const userId = jwt.decode(jwtToken).sub;

    let user = await User.findById(userId);
    let temple = await Temple.findById(templeId);
    let count = temple.tokens.length;
    let newToken = new Token(req.body);
    newToken.number = count + 1;
    newToken.litBy = userId;
    newToken.litAt = temple._id;
    user.tokens.push(newToken);
    temple.tokens.push(newToken);

    await newToken.save();
    await user.save();
    await temple.save();

    res
      .status(200)
      .json({ success: true, message: "Successfully Lit your Jyot!" });
  } catch (error) {
    throw new ExpressError(500, error._message);
  }
};

module.exports.editToken = async (req, res) => {
  let { id } = req.params;
  try {
    await Token.findByIdAndUpdate(id, { ...req.body }).then((result) => {
      res.status(200).json({ message: `Edit Successful` });
    });
  } catch (error) {
    console.log(error);
    throw new ExpressError(500, `Internal Server Error`);
  }
};

module.exports.deleteToken = async (req, res) => {
  let { id } = req.params;
  try {
    let token = await Token.findByIdAndDelete(id);
    if (token) {
      res.status(200).json({ message: `Token deleted successfully!` });
    }
  } catch (error) {
    throw new ExpressError(500, `Internal Server Error`);
  }
};
