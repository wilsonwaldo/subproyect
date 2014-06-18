var express = require('express');
var router = express.Router();

/*router.all('*', function(req, res) {
  res.render('llamadas', { titulo: 'Expressionality'});
});*/

/* GET llamadas listing. */
router.get('/', function(req, res) {
  res.render('llamadas', { titulo: 'Expressionality'});
});

module.exports = router;
