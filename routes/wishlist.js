var express = require('express');
var router = express.Router();

const wishlistConstroller = require("../controllers/wishlistController")

/* GET products listing. */

router.get('/', wishlistConstroller.getAll);

router.get('/', wishlistConstroller.getById)

router.post('/:id', wishlistConstroller.create)

router.delete('/:id', wishlistConstroller.delete)

router.put('/:id', wishlistConstroller.update)

module.exports = router;
