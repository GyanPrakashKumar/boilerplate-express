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
    console.log(message);
});







module.exports = app;