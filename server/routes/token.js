const express = require("express");
const router = express.Router();
const tokenController = require("../controller/token");
const wrapAsync = require("../utils/wrapAsync");
const authenticateToken = require("../middlewares/jwtauthenticate");
const { isOwner } = require("../middlewares/middleware");

router.get("/:id/view", authenticateToken, tokenController.index);

router.post("/:id/new", authenticateToken, wrapAsync(tokenController.newToken));

router.post(
  "/:id/edit",
  authenticateToken,
  wrapAsync(tokenController.editToken)
);

router.delete(
  "/:id",
  authenticateToken,
  isOwner,
  wrapAsync(tokenController.deleteToken)
);

module.exports = router;
