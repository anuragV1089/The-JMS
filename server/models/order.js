const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = Schema({
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: String,
  amount: Number,
  currency: String,
  recieptId: String,
  status: String,
  paymentVerified: {
    type: Boolean,
    default: false,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
