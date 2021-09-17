const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("IT WORKED");
});
app.get("/new", function (req, res) {
  res.send("New also worked");
});

app.get('/add', function (req, res) {
  var a = Number(req.query.a);
  var b = Number(req.query.b)
  if (!isNaN(a) && !isNaN(b)) {
    res.send((a + b).toString())
  } else {
    res.send("a, b must be number")
  }
});

app.get('/process', function (req, res) {
  var input = String(req.query.a);

  if (input !== null) {
    input.replace("\\s+", " ").trim()
    const output = input.split(" ");
    for (var i = 0; i < output.length; i++) {
      output[i] = output[i].charAt(0).toUpperCase() + output[i].slice(1);

    }
    const result = output.join(" ").toString();
    res.send(result)
  } else {
    res.send("error")
  }
});


app.listen(process.env.PORT || 5000);
module.exports = app;