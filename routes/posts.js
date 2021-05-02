var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts')

router.get('/guitars', postsCtrl.showGuitars)

module.exports = router;