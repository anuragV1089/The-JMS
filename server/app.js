const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`You're at home page!`);
});

app.listen(process.env.PORT, () => {
  console.log(`app is listening on 8080`);
});
