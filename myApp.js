let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    let path = __dirname + '/views/index.html';
    res.sendFile(path);
});

const mySecret = process.env['MESSAGE_STYLE']

let response = "Hello json";
app.get('/json', (req, res) => {
    if (mySecret == "uppercase") {
      res.json({
          "message": response.toUpperCase()
      });
    } else {
    res.json({
        "message": response
    });
    }
});







module.exports = app;