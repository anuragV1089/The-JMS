const User = require("../models/user");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const ExpressError = require("../utils/ExpressError");

module.exports.signUp = async (req, res) => {
  let { username, password } = req.body;
  let registeredUser = await User.register({ username }, password);
  res.send(registeredUser);
};

module.exports.login = async (req, res, next) => {
  passport.authenticate(
    "local",
    { session: false },
    async (err, user, info) => {
      if (err) {
        return next(
          new ExpressError(401, `Authorization Error : ${err.message}`)
        );
      }
      if (!user) {
        return next(new ExpressError(401, "Invalid username or password"));
      }
      const payload = {
        sub: user._id,
        username: user.username,
      };
      let tokens = {
        accessToken: jwt.sign(payload, process.env.ACCESS_TOKEN, {
          expiresIn: "15m",
        }),
        refreshToken: jwt.sign(payload, process.env.REFRESH_TOKEN, {
          expiresIn: "7d",
        }),
      };

      user.refreshToken = tokens.refreshToken;
      await user.save().catch((err) => {
        return next(new ExpressError(500, `User saving problem`));
      });

      res.cookie("jwtRefresh", tokens.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.send(tokens.accessToken);
    }
  )(req, res, next);
};

module.exports.refresh = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwtRefresh) {
    throw new ExpressError(400, `No refresh Token Found`);
  }

  const refreshToken = cookies.jwtRefresh;

  await User.findOne({ refreshToken: refreshToken }).then((user) => {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) => {
      if (err || user._id.toString() !== decoded.sub.toString()) {
        throw new ExpressError(401, `Invalid refresh Token`);
      }

      jwt.sign(
        { sub: user._id, username: user.username },
        process.env.ACCESS_TOKEN,
        {
          expiresIn: "15m",
        },
        (err, token) => {
          if (err) throw new ExpressError(500, `Can't sign token`);
          res.send(token);
        }
      );
    });
  });
};

module.exports.logout = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwtRefresh) {
    throw new ExpressError(400, "No refress Token present in cookies");
  }

  const refreshToken = await cookies.jwtRefresh;

  const foundUser = await User.findOne({ refreshToken: refreshToken });

  if (!foundUser) {
    res.clearCookie("jwtRefresh", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    throw new ExpressError(404, `No such user found`);
  }

  foundUser.refreshToken = undefined;
  await foundUser.save();

  res.clearCookie("jwtRefresh", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
  res.send(`${foundUser} successfully logged out`);
};
