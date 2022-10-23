const router = require('express').Router();
const controller = require('./loginController');

router.get('/getData', controller.getData);
router.post('/loginGoogle', controller.checkInUser);

module.exports = router;