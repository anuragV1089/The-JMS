const express = require("express");
const router = express.Router();
const tokenController = require("../controller/token");
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync");
const authenticateToken = require("../middlewares/jwtauthenticate");
const { isOwner } = require("../middlewares/middleware");

router.get("/:id/view", authenticateToken, tokenController.index);

router.post("/:id/new", wrapAsync(tokenController.newToken));

router.post(
  "/:id/edit",
  passport.authenticate("jwt", { session: false }),
  wrapAsync(tokenController.editToken)
);

router.delete("/:id", isOwner, wrapAsync(tokenController.deleteToken));

module.exports = router;
