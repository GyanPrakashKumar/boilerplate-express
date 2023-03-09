let express = require('express');
let app = express();

app.get('/',(req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/", (req, res) => {
  res.sendFile('/views/index.html');
});
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase")
    res.json({
      message: "Hello json".toUpperCase()
    });
  else
    res.json({
      message: "Hello json"
    });
});
// Assets at the /public route
app.use('/public', express.static(__dirname + '/public'));

module.exports = app;