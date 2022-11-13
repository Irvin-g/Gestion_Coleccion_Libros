const query = require('../services/database').query;
const queries = require('./librosDeseadosQueries');

const librosdeseados = {};

librosdeseados.obtenerLibrosDeseados = (idUsuario) => new Promise((resolve, reject) => {
    query(queries.obtenerLibrosDeseados, [idUsuario], (error, librosdeseados) => {
        if (error) {
            reject(error);
        } else {
            resolve(librosdeseados || []);
        }
    });
});

librosdeseados.nuevoLibroDeseado = (data) => new Promise((resolve, reject) => {
    query(queries.nuevoLibroDeseado, [[data]], (error, librosdeseados) => {
        if (error) {
            reject(error);
        } else {
            resolve(librosdeseados || {});
        }
    });
});

librosdeseados.eliminarLibroDeseado = (idLibroDeseado) => new Promise((resolve, reject) => {
    query(queries.eliminarLibroDeseado, [idLibroDeseado], (error, librosdeseados) => {
        if (error) {
            reject(error);
        } else {
            resolve(librosdeseados || []);
        }
    });
});

librosdeseados.obtenerComentariosLibro = (idLibro) => new Promise((resolve, reject) => {
    query(queries.obtenerComentariosLibro, [idLibro], (error, librosdeseados) => {
        if (error) {
            reject(error);
        } else {
            resolve(librosdeseados || []);
        }
    });
});

librosdeseados.nuevoComentario = (data) => new Promise((resolve, reject) => {
    query(queries.nuevoComentario, [[data]], (error, librosdeseados) => {
        if (error) {
            reject(error);
        } else {
            resolve(librosdeseados || {});
        }
    });
});

module.exports = librosdeseados;
