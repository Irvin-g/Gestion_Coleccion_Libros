const query = require('../services/database').query;
const queries = require('./coleccionQueries');

const coleccion = {};

coleccion.obtenerColecciones = () => new Promise((resolve, reject) => {
    query(queries.obtenerColecciones, [], (error, coleccion) => {
        if (error) {
            reject(error);
        } else {
            resolve(coleccion || []);
        }
    });
});

coleccion.obtenerColeccionPorId = (idColeccion) => new Promise((resolve, reject) => {
    query(queries.obtenerColeccionPorId, [idColeccion], (error, coleccion) => {
        if (error) {
            reject(error);
        } else {
            resolve(coleccion || []);
        }
    });
});

coleccion.crearColeccion = (data) => new Promise((resolve, reject) => {
    query(queries.crearColeccion, [[data]], (error, coleccion) => {
        if (error) {
            reject(error);
        } else {
            resolve(coleccion || {});
        }
    });
});

coleccion.editarColeccion = (data) => new Promise((resolve, reject) => {
    query(queries.editarColeccion, data, (error, coleccion) => {
        if (error) {
            reject(error);
        } else {
            resolve(coleccion || {});
        }
    });
});

coleccion.disableColeccion = (idColeccion) => new Promise((resolve, reject) => {
    query(queries.disableColeccion, [idColeccion], (error, coleccion) => {
        if (error) {
            reject(error);
        } else {
            resolve(coleccion || []);
        }
    });
});

module.exports = coleccion;
