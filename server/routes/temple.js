const express = require("express");
const router = express.Router();
const templeController = require("../controller/temple");
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync");
const { isAdmin } = require("../middlewares/middleware");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  templeController.index
);

router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  wrapAsync(templeController.newTemple)
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  wrapAsync(templeController.view)
);

router.post(
  "/:id/edit",
  passport.authenticate("jwt", { session: false }),
  wrapAsync(templeController.updateTemple)
);

router.delete("/:id", isAdmin, wrapAsync(templeController.deleteTemple));

module.exports = router;
