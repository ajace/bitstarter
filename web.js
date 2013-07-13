var express = require('express');
var content = fs.readFileSync('index.html');
var buffer = new Buffer(32);
buffer.write(content);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
