var express = require('express');
var router = express.Router();

const productsConstroller = require("../controllers/productsController")

/* GET products listing. */

router.get('/', productsConstroller.getAll);

router.get('/:id', productsConstroller.getById)

router.post('/', productsConstroller.create)

router.delete('/:id', productsConstroller.delete)

router.put('/:id', productsConstroller.update)

module.exports = router;

//ejemplo para aplicar middleware en el route ej.
//router.get('/', (req, res, next) => { req.app.validateUser(req, res, next) }, productsConstroller.getAll);