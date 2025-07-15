const Razorpay = require("razorpay");
const Order = require("../models/order");
const ExpressError = require("../utils/ExpressError");
const crypto = require("crypto");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports.createRazorpayOrder = async (req, res) => {
  try {
    const { amount, username } = req.body;
    const receiptId = (await Order.countDocuments()) + 1;
    const options = {
      amount: amount,
      currency: "INR",
      receipt: "#" + receiptId,
    };
    const order = await razorpay.orders.create(options);
    console.log(order);
    if (order) {
      const newOrder = new Order({
        amount: order.amount,
        currency: order.currency,
        razorpay_order_id: order.id,
        receiptId: receiptId,
        status: order.status,
        doneBy: username,
      });

      newOrder
        .save()
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          return next(new ExpressError(500, `Mongoose Error`));
        });
    }
    res.status(200).json({
      success: true,
      order: order,
    });
  } catch (err) {
    console.log(err);
    throw new ExpressError(err.statusCode, err.error.description);
  }
};

module.exports.verifyRazorpayPayment = async (req, res) => {
  try {
    console.log("Its here");
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      const order = await Order.findOne({
        razorpay_order_id: razorpay_order_id,
      });

      if (order) {
        const updation = await Order.findByIdAndUpdate(order._id, {
          razorpay_payment_id: razorpay_payment_id,
          status: "verified",
          paymentVerified: true,
        });

        console.log(updation);
      }
      res.json({
        success: true,
        desc: `Payment is verified`,
      });
    } else {
      res.status(400).json({ success: false, message: `Invalid Signature` });
    }
  } catch (error) {
    console.log(error);
    throw new ExpressError(error.status, error.error.description);
  }
};
