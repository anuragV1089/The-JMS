const dotenv = require("dotenv");
dotenv.config();
const jwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user");

let options = {
  jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN,
};

module.exports = (passport) => {
  passport.use(
    new jwtStrategy(options, (jwt_payload, done) => {
      User.findById(jwt_payload.sub)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => {
          done(err, false);
        });
    })
  );
};
