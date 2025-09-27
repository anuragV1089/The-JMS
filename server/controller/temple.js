const Temple = require("../models/temple");
const ExpressError = require("../utils/ExpressError");
const User = require("../models/user");

module.exports.index = async (req, res) => {
  try {
    const temples = await Temple.find({});
    if (temples) {
      res.send(temples);
    }
  } catch (err) {
    throw new ExpressError(404, "MongoDB Error");
  }
};

module.exports.view = async (req, res) => {
  let { id } = req.params;
  try {
    const temple = await Temple.findById(id).populate("tokens");
    if (temple) {
      res.send(temple);
    }
  } catch (err) {
    throw new ExpressError(404, "No such Temple found");
  }
};

module.exports.newTemple = async (req, res) => {
  const temple = req.body;
  try {
    let user = await User.findById(temple.admin);
    const response = await Temple.insertOne(temple);
    user.adminOf = response._id;
    await user.save();
    if (response) {
      res.status(200).json({ success: true, message: "New Temple Added!" });
    }
  } catch (err) {
    throw new ExpressError(400, err._message);
  }
};

module.exports.updateTemple = async (req, res) => {
  let { id } = req.params;
  try {
    const response = await Temple.findByIdAndUpdate(id, { ...req.body });
    if (response) {
      res
        .status(200)
        .json({ success: true, message: `Data Updation Successfull` });
    }
  } catch (error) {
    throw new ExpressError(400, error.message);
  }
};

module.exports.deleteTemple = async (req, res) => {
  let { id } = req.params;
  try {
    let deletedTemple = await Temple.findByIdAndDelete(id);
    if (deletedTemple) {
      res
        .status(200)
        .json({ success: true, message: "Your temple is deleted!" });
    }
  } catch (error) {
    console.log(error);
    throw new ExpressError(400, error.message);
  }
};
