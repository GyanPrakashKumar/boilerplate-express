let express = require('express');
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json());

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
};

app.get("/", logger, (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
app.get("/json", logger, (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase")
    res.json({
      message: "Hello json".toUpperCase()
    });
  else
    res.json({
      message: "Hello json"
    });
});

app.get('/now', function(req, res, next){
  req.time = new Date().toString();
  next();
},
  function(req, res) {
    res.send({"time": req.time});
  }       
);

app.get('/:word/echo', function(req, res){
res.json({echo: req.params.word})
console.log(req.params.word)
})

app.get("/name", function(req, res) {
  // var firstName = req.query.first;
  // var lastName = req.query.last;
  var { first: firstName, last: lastName } = req.query;
  res.json({
    name: `${firstName} ${lastName}`
  });
});

app.post((req, res) => {
    let first= req.body.first;
    let last= req.body.last;
    res.json({ name: `${first} ${last}`});
});

// Assets at the /public route
app.use('/public', express.static(__dirname + '/public'));

module.exports = app;