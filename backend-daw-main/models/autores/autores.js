const query = require('../services/database').query;
const queries = require('./autoresQueries');

const autores = {};

autores.obtenerAutores = () => new Promise((resolve, reject) => {
    query(queries.obtenerAutores, [], (error, autores) => {
        if (error) {
            reject(error);
        } else {
            resolve(autores || []);
        }
    });
});

autores.obtenerAutorPorId = (idAutor) => new Promise((resolve, reject) => {
    query(queries.obtenerAutorPorId, [idAutor], (error, autores) => {
        if (error) {
            reject(error);
        } else {
            resolve(autores || []);
        }
    });
});

autores.crearAutor = (data) => new Promise((resolve, reject) => {
    query(queries.crearAutor, [[data]], (error, autores) => {
        if (error) {
            reject(error);
        } else {
            resolve(autores || {});
        }
    });
});

autores.editarAutor = (data) => new Promise((resolve, reject) => {
    query(queries.editarAutor, data, (error, autores) => {
        if (error) {
            reject(error);
        } else {
            resolve(autores || {});
        }
    });
});

autores.disableAutor = (idAutor) => new Promise((resolve, reject) => {
    query(queries.disableAutor, [idAutor], (error, autores) => {
        if (error) {
            reject(error);
        } else {
            resolve(autores || []);
        }
    });
});

module.exports = autores;
