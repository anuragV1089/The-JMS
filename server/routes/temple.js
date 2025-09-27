const express = require("express");
const router = express.Router();
const templeController = require("../controller/temple");
const wrapAsync = require("../utils/wrapAsync");
const { isAdmin } = require("../middlewares/middleware");
const authenticateToken = require("../middlewares/jwtauthenticate");

router.get("/", authenticateToken, templeController.index);

router.post("/new", authenticateToken, wrapAsync(templeController.newTemple));

router.get("/:id", authenticateToken, wrapAsync(templeController.view));

router.post(
  "/:id/edit",
  authenticateToken,
  wrapAsync(templeController.updateTemple)
);

router.delete(
  "/:id",
  authenticateToken,
  isAdmin,
  wrapAsync(templeController.deleteTemple)
);

module.exports = router;
