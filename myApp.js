let express = require('express');
let app = express();
console.log("Hello World")

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    let path = __dirname + '/views/index.html';
    res.sendFile(path);
});
const mySecret = process.env['MESSAGE_STYLE']

app.get("/json", (req, res) => {
    if (mySecret === "uppercase") {
      response = "Hello json".toUpperCase();
    } else {
      response = "Hello json";
    }
    res.json({
        message: response
    });
});












module.exports = app;
