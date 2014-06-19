var express = require('express');
var Facebook = require('facebook-node-sdk');
var router = express.Router();

/* GET users listing. */

router.get('/', Facebook.loginRequired(), function (req, res) {
  req.facebook.api('/me', function(err, user) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, ' + user.name + '!');
  });
});


module.exports = router;