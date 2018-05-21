var express = require('express');
var router = express.Router();
var users = require('../controllers/user.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  let Sandeep = new users("Sandeep");
  res.status(200).json({"myname":Sandeep.getusername()});
});

module.exports = router;
