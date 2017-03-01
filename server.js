var express = require('express');
var app = express();

app.get('/', (req,res) => {
  res.send("Hello Parag");
});

app.listen(3000, () => {
    console.log("welcome to Node express server");
});