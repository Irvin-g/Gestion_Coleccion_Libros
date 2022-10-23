"use strict";
const coleccion = require("../../models/coleccion/coleccion");

const obtenerColecciones = async (req, res) => {
    let result = [];
    try {
        result = await coleccion.obtenerColecciones();
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const obtenerColeccionPorId = async (req, res) => {
    let result = [];
    const idColeccion = req.params.idColeccion;
    try {
        result = await coleccion.obtenerColeccionPorId(idColeccion);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const crearColeccion = async (req, res) => {
    const data = Object.values(req.body);
    let result = {};
    try {
        result = await coleccion.crearColeccion(data);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const editarColeccion = async (req, res) => {
    const data = Object.values(req.body);
    let result = {};
    try {
        result = await coleccion.editarColeccion(data);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const disableColeccion = async (req, res) => {
    let result = [];
    const idColeccion = req.params.idColeccion;
    try {
        result = await coleccion.disableColeccion(idColeccion);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

module.exports = {
    obtenerColecciones,
    obtenerColeccionPorId,
    crearColeccion,
    editarColeccion,
    disableColeccion,
};

