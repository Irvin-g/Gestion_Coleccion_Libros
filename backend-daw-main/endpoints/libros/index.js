const router = require('express').Router();
const controller = require('./librosController');

router.get('/obtenerLibros', controller.obtenerLibros);
router.get('/obtenerLibrosViewTabla', controller.obtenerLibrosViewTabla);
router.get('/obtenerLibroPorId/:idLibro', controller.obtenerLibroPorId);

router.post('/crearLibro', controller.crearLibro);
router.put('/editarLibro', controller.editarLibro);

router.delete('/disableLibro/:idLibro', controller.disableLibro);

module.exports = router;