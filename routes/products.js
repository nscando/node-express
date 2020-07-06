var express = require('express');
var router = express.Router();

const productsConstroller = require("../controllers/wishlistController")

/* GET products listing. */

router.get('/', productsConstroller.getAll);

router.get('/', productsConstroller.getById)

router.post('/:id', productsConstroller.create)

router.delete('/:id', productsConstroller.delete)

router.put('/:id', productsConstroller.update)

module.exports = router;
