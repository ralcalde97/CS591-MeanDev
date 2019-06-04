var express = require('express');
var router = express.Router();

let strings = { string: 'Hey now' };

/* GET ps3 page. */
router.get('/', function(req, res, next) {
    res.render('ps3', strings);
});


/* POST to ps3 page. */
router.post('/', function(req, res, next){
    let receivedExpression = req.body.string;
    let newStringsLen = { string: receivedExpression, length: receivedExpression.length };
    res.render('ps3', newStringsLen);
});

module.exports = router;

