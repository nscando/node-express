var express = require('express');
var router = express.Router();
const registerController = require('../controllers/registerController')


/* GET register listing. */
router.post('/', registerController.registro);

module.exports = router;