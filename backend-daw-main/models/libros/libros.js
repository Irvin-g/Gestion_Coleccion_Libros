const query = require('../services/database').query;
const queries = require('./librosQueries');

const libros = {};

libros.obtenerLibros = () => new Promise((resolve, reject) => {
    query(queries.obtenerLibros, [], (error, libros) => {
        if (error) {
            reject(error);
        } else {
            resolve(libros || []);
        }
    });
});

libros.obtenerLibrosViewTabla = () => new Promise((resolve, reject) => {
    query(queries.obtenerLibrosViewTabla, [], (error, libros) => {
        if (error) {
            reject(error);
        } else {
            resolve(libros || []);
        }
    });
});

libros.obtenerLibroPorId = (idLibro) => new Promise((resolve, reject) => {
    query(queries.obtenerLibroPorId, [idLibro], (error, libros) => {
        if (error) {
            reject(error);
        } else {
            resolve(libros || []);
        }
    });
});

libros.crearLibro = (data) => new Promise((resolve, reject) => {
    query(queries.crearLibro, [[data]], (error, libros) => {
        if (error) {
            reject(error);
        } else {
            resolve(libros || {});
        }
    });
});

libros.editarLibro = (data) => new Promise((resolve, reject) => {
    query(queries.editarLibro, data, (error, libros) => {
        if (error) {
            reject(error);
        } else {
            resolve(libros || {});
        }
    });
});

libros.disableLibro = (idLibro) => new Promise((resolve, reject) => {
    query(queries.disableLibro, [idLibro], (error, libros) => {
        if (error) {
            reject(error);
        } else {
            resolve(libros || []);
        }
    });
});

module.exports = libros;
