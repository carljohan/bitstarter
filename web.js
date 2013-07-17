var express = require('express');
<<<<<<< HEAD
var fs = require('fs');
var htmlfile = "index.html";
=======
>>>>>>> 33383062df1af191655ea687e588f6932c18b5bd

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
<<<<<<< HEAD
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
=======
  var fs = require('fs');
  var buf = new Buffer(fs.readFileSync('index.html'), 'utf-8');
  response.send(buf.toString());
>>>>>>> 33383062df1af191655ea687e588f6932c18b5bd
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
