var express = require('express');

var app = express.createServer(express.logger());
var filename = "index.html";
var content = fs.readFileSync(filename,'utf8');
app.get('/', function(request, response) {
  response.send(content.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
