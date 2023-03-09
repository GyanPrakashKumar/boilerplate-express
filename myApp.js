let express = require("express");
let app = express();
require("dotenv").config();

// app.use("/public", express.static(__dirname + "/public"));

app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    return res.json({ message: message.toUpperCase() });
  }
  return res.status(200).json({ message: message });
});

module.exports = app;