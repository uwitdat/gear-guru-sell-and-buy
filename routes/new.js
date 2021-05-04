var express = require('express');
var router = express.Router();
const newCtrl = require('../controllers/new')
const { ensureAuthenticated } = require('../config/auth')

//get new post/
router.get('/guitar', ensureAuthenticated, newCtrl.newGtr)
router.get('/amp', ensureAuthenticated, newCtrl.newAmp)

router.post('/guitar', newCtrl.createPost)
router.post('/amp', newCtrl.createAmpPost)

module.exports = router;