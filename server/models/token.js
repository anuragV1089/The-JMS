const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Temple = require("./temple");
const User = require("./user");

const tokenSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Oil", "Ghee"],
    required: true,
  },
  number: {
    type: Number,
    required: true,
    default: 0,
  },
  litAt: {
    type: Schema.Types.ObjectId,
    ref: "Temple",
  },
  litBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

tokenSchema.post("findOneAndDelete", async (token) => {
  if (token) {
    const temple = await Temple.findByIdAndUpdate(
      token.litAt,
      {
        $pull: { tokens: token._id },
      },
      { new: true }
    );
    const user = await User.findByIdAndUpdate(
      token.litBy,
      {
        $pull: { tokens: token._id },
      },
      { new: true }
    );
  }
});

const Token = mongoose.model("Token", tokenSchema);
module.exports = Token;
