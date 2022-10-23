const router = require('express').Router();
const controller = require('./coleccionController');

router.get('/obtenerColecciones', controller.obtenerColecciones);
router.get('/obtenerColeccionPorId/:idColeccion', controller.obtenerColeccionPorId);

router.post('/crearColeccion', controller.crearColeccion);
router.put('/editarColeccion', controller.editarColeccion);

router.delete('/disableColeccion/:idColeccion', controller.disableColeccion);

module.exports = router;