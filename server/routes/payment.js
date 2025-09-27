const express = require("express");
const razorpayController = require("../controller/razorPay");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const authenticateToken = require("../middlewares/jwtauthenticate");

router.post(
  "/order",
  authenticateToken,
  wrapAsync(razorpayController.createRazorpayOrder)
);

router.post(
  "/verify",
  authenticateToken,
  wrapAsync(razorpayController.verifyRazorpayPayment)
);

module.exports = router;
