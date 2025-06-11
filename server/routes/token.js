const express = require("express");
const router = express.Router();
const tokenController = require("../controller/token");
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  tokenController.index
);

router.post("/new", wrapAsync(tokenController.newToken));

router.post(
  "/:id/edit",
  passport.authenticate("jwt", { session: false }),
  wrapAsync(tokenController.editToken)
);

module.exports = router;
