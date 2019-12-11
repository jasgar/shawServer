'use strict';

var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

var dataRouter = require('./dataRouter');
app.use('/data', dataRouter);


var port = 3000;

app.listen(port, () => {
  console.log('Listening on port ' + port.toString());
});

