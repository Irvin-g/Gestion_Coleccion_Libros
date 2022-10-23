const router = require('express').Router();
const controller = require('./autoresController');

router.get('/obtenerAutores', controller.obtenerAutores);
router.get('/obtenerAutorPorId/:idAutor', controller.obtenerAutorPorId);

router.post('/crearAutor', controller.crearAutor);

router.put('/editarAutor', controller.editarAutor);

router.delete('/disableAutor/:idAutor', controller.disableAutor);

module.exports = router;