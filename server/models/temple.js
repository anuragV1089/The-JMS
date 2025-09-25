const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Token = require("./token");
const User = require("./user");

const templeSchema = Schema({
  templeName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  tokens: [
    {
      type: Schema.Types.ObjectId,
      ref: "Token",
    },
  ],
});

templeSchema.post("findOneAndDelete", async (temple) => {
  if (temple) {
    await Token.deleteMany({ _id: { $in: temple.tokens } });
    await User.findByIdAndUpdate(
      temple.admin,
      { adminOf: null },
      { new: true }
    );
  }
});

const Temple = mongoose.model("Temple", templeSchema);
module.exports = Temple;
