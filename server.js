var express = require('express');

var app = express();
app.use(express.static('public'));

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Express server is up on: ' + process.env.IP + ":" + process.env.PORT);
});
