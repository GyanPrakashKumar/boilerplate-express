let express = require('express');
let app = express();

// Root level logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    let path = __dirname + '/views/index.html';
    res.sendFile(path);
});


app.get('/json', (req, res) => {
    if (process.env['MESSAGE_STYLE'] == "uppercase") {
      res.json({
          "message": "Hello json".toUpperCase()
      });
    } else {
    res.json({
        "message": "Hello json"
    });
    }
});







module.exports = app;