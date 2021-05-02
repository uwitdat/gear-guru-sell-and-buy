var express = require('express');
var router = express.Router();
const newCtrl = require('../controllers/new')

//get new post/
router.get('/', newCtrl.getNew)
router.get('/guitar', newCtrl.newGtr)
router.get('/amp', newCtrl.newAmp)

router.post('/guitar', newCtrl.createPost)
router.post('/amp', newCtrl.createAmp)

module.exports = router;