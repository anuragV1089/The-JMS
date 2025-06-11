const Token = require("../models/token");

module.exports.index = async (req, res) => {
  Token.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports.newToken = async (req, res) => {
  let tokens = req.body;
  let count = (await Token.countDocuments()) + 1;
  let newTokens = tokens.map((ele) => {
    return { ...ele, number: 100 + count++ };
  });
  await Token.insertMany(newTokens)
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports.editToken = async (req, res) => {
  let { id } = req.params;
  await Token.findByIdAndUpdate(id, { ...req.body.token }).then((result) => {
    res.status(200).json({ message: `Edit Successful` });
  });
};
