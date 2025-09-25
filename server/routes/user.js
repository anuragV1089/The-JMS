const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const wrapAsync = require("../utils/wrapAsync");
const authenticateToken = require("../middlewares/jwtauthenticate");

router.post("/signup", wrapAsync(userController.signUp));

router.post("/login", wrapAsync(userController.login));

router.get("/refresh", wrapAsync(userController.refresh));

router.get("/logout", wrapAsync(userController.logout));

module.exports = router;
