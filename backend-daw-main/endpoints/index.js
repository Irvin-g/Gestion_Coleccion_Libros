const router = require('express').Router();

router.use('/login', require('./login'));
router.use('/autores', require('./autores'));
router.use('/coleccion', require('./coleccion'));
router.use('/libros', require('./libros'));

module.exports = router;