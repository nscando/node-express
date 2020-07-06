var express = require('express');
var router = express.Router();

/* GET register listing. */
router.get('/', function (req, res, next) {
     res.send('REGISTER WORKS!');
});

module.exports = router;