var express = require('express');
var app = express();
app.get('/',function(req,res) {
    res.send("Anu first Jenkins tutorial");
  });
  
  app.listen(4000);