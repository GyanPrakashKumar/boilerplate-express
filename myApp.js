let express = require('express');
let app = express();
require('dotenv').config()

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    let path = __dirname + '/views/index.html';
    res.sendFile(path);
});

const mySecret = process.env['MESSAGE_STYLE'];
console.log(mySecret)

app.get('/json', (req, res) => {
    if (mySecret == "uppercase") {
      res.json({
          "message": "Hello json".toUpperCase()
      });
    } else {
    res.json({
        "message": "Hello json"
    });
    }
    console.log(message);
});







module.exports = app;