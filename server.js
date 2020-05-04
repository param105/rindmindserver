var express = require('express');
var app = express();

app.get('/', function(req, res) {
 res.send('Hello Rind mind serrver ---');
});

app.listen(3333, function() {
 console.log("RindMInd Server is running at 3333 port!");
});

