'use strict';

var express = require('express');
var router = express.Router();

router.post('/record', (req, res) => {
  console.log(req.body);
  res.send('Success');
});

module.exports = router;

