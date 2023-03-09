let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    let path = __dirname + '/views/index.html';
    res.sendFile(path);
});

// const mySecret = process.env['MESSAGE_STYLE'];

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