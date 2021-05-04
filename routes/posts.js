var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts')
const showCtrl = require('../controllers/show')

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

//show all amps
router.get('/amps', postsCtrl.showAmps)

//show solid state amps
router.get('/amps/solidstate', postsCtrl.showSolidState)

//show tube amps
router.get('/amps/tube', postsCtrl.showTube)

//show amps below 1000
router.get('/amps/below1000', postsCtrl.showAmpUnder1000)


//SHOW ONE
router.get('/guitars/:id', showCtrl.showGuitar)

router.get('/amps/:id', showCtrl.showAmp)


//get edit
router.get('/guitars/:id/edit', showCtrl.editGtr)

//put request
router.put('/guitars/:id/edit', showCtrl.updateGtr)

module.exports = router;