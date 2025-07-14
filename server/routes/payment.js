const express = require("express");
const razorpayController = require("../controller/razorPay");
const router = express.Router();
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync");

router.post(
  "/order",
  passport.authenticate("jwt", { session: false }),
  wrapAsync(razorpayController.createRazorpayOrder)
);

module.exports = router;
