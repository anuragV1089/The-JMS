const dotenv = require("dotenv");
dotenv.config();
//Cors
const cors = require("cors");
//Express
const express = require("express");
const app = express();
//MongoDB
const mongoose = require("mongoose");
//Models
const User = require("./models/user");
//passport
const passport = require("passport");
const passconfig = require("./config/passport");
passconfig(passport);
const LocalStrategy = require("passport-local");
//routers
const tokenRouter = require("./routes/token");
const userRouter = require("./routes/user");
const paymentRouter = require("./routes/payment");
const templeRouter = require("./routes/temple");
//cookie
const cookieParser = require("cookie-parser");
//Error Handling
const ExpressError = require("./utils/ExpressError");
//Redis
require("./config/redis");

main()
  .then((res) => {
    console.log(`Connected to Database`);
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  mongoose.connect(process.env.MONGODB_URL);
}

const corsOptions = {
  origin: process.env.CLIENT_SIDE_URL,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(passport.initialize());
app.use(cookieParser());
passport.use(new LocalStrategy(User.authenticate()));

//Routes
app.use("/tokens", tokenRouter);
app.use("/users", userRouter);
app.use("/payment", paymentRouter);
app.use("/temples", templeRouter);

app.all("*url", (req, res) => {
  let { url } = req.params;
  throw new ExpressError(404, `${url} this url doesn't exist!`);
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Internal Server Error" } = err;
  if (err.name) {
    return res.status(statusCode).json({ name: err.name, message: message });
  }
  res.status(statusCode).json({ message: message });
});

app.listen(process.env.PORT, () => {
  console.log(`app is listening on ${process.env.PORT}`);
});
