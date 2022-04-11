var express = require('express');
var router = express.Router();
var db = require('../config/db');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});
router.get('/getGirlFriend', function(req, res, next) {
  let obj = {
    name:'李玉华',
    age:'23',
    weight:'99'
  }
  res.send(obj);
});
module.exports = router;
