const router = require('express').Router();
const controller = require('./librosdeseadosController');

router.get('/obtenerLibrosDeseados/:idUsuario', controller.obtenerLibrosDeseados);
router.get('/obtenerComentariosLibro/:idLibro', controller.obtenerComentariosLibro);

router.post('/nuevoLibroDeseado', controller.nuevoLibroDeseado);
router.post('/nuevoComentario', controller.nuevoComentario);

router.delete('/eliminarLibroDeseado/:idLibroDeseado', controller.eliminarLibroDeseado);

module.exports = router;