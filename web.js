var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var filename = "index.html";
var data = fs.readFileSync(filename, 'utf8');
app.get('/', function(request, response) {
  response.send(data.toString());
});
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
