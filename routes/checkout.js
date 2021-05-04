var express = require('express');
var router = express.Router();
const checkoutCtrl = require('../controllers/checkout')

// show checkout
router.get('/:id', checkoutCtrl.show)

module.exports = router;