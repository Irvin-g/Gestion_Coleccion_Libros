"use strict";
const autores = require("../../models/autores/autores");

const obtenerAutores = async (req, res) => {
    let result = [];
    try {
        result = await autores.obtenerAutores();
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const obtenerAutorPorId = async (req, res) => {
    let result = [];
    const idAutor = req.params.idAutor;
    try {
        result = await autores.obtenerAutorPorId(idAutor);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const crearAutor = async (req, res) => {
    const data = Object.values(req.body);
    let result = {};
    try {
        result = await autores.crearAutor(data);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const editarAutor = async (req, res) => {
    const data = Object.values(req.body);
    let result = {};
    try {
        result = await autores.editarAutor(data);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const disableAutor = async (req, res) => {
    let result = [];
    const idAutor = req.params.idAutor;
    try {
        result = await autores.disableAutor(idAutor);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

module.exports = {
    obtenerAutores,
    obtenerAutorPorId,
    crearAutor,
    editarAutor,
    disableAutor,
};

