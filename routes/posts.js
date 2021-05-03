var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts')

//show all guitars
router.get('/guitars', postsCtrl.showGuitars)

//show vintage guitars
router.get('/guitars/vintage', postsCtrl.showVintageGuitars)

//show modern guitars
router.get('/guitars/modern', postsCtrl.showModernGuitars)

//show solid body
router.get('/guitars/solidbody', postsCtrl.showSolidBody)

//show hollow body
router.get('/guitars/hollowbody', postsCtrl.showHollowBody)


//show below 1000
router.get('/guitars/below1000', postsCtrl.showBelow1000)

router.get('/amps', postsCtrl.showAmps)


module.exports = router;