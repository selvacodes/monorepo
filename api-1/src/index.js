var http = require("http");
var { port } = require("./files");

var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("Hello Express World!");
});

app.listen(port, function() {
  console.log("Example app listening on port 6001!");
});
