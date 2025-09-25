const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = Schema({
  refreshToken: {
    type: String,
    // unique: true,
  },
  tokens: [
    {
      type: Schema.Types.ObjectId,
      ref: "Token",
    },
  ],
  adminOf: {
    type: Schema.Types.ObjectId,
    ref: "Temple",
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
