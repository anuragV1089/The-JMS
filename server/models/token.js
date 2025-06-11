const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
});

const Token = mongoose.model("Token", tokenSchema);
module.exports = Token;
