var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './')));
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + 'index.html'));
});

app.listen(3000, () => {
    console.log("welcome to Node express server");
});