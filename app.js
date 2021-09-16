const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("IT WORKED");
});
app.get("/new", function (req, res) {
  res.send("New also worked");
});

app.get('/add', function(req, res) {
    var a = Number(req.query.a);
    var b = Number(req.query.b)
    if (!isNaN(a) && !isNaN(b)) {
        res.send((a + b).toString())
    } else {
        res.send("a, b must be number")
    }
});

app.listen(process.env.PORT || 5000);
module.exports = app;