var express = require('express');
var router = express.Router();

const cartConstroller = require("../controllers/cartController")

/* GET wishlist listing. */

router.get('/', cartConstroller.getAll);

router.get('/', cartConstroller.getById)

router.post('/:id', cartConstroller.create)

router.delete('/:id', cartConstroller.delete)

router.put('/:id', cartConstroller.update)

module.exports = router;
