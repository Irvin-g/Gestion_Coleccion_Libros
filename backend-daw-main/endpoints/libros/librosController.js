"use strict";
const libros = require("../../models/libros/libros");

const obtenerLibros = async (req, res) => {
    let result = [];
    try {
        result = await libros.obtenerLibros();
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const obtenerConteoDashboard = async (req, res) => {
    let result = [];
    try {
        result = await libros.obtenerConteoDashboard();
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const obtenerLibrosViewTabla = async (req, res) => {
    let result = [];
    try {
        result = await libros.obtenerLibrosViewTabla();
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const obtenerLibroPorId = async (req, res) => {
    let result = [];
    const idLibro = req.params.idLibro;
    try {
        result = await libros.obtenerLibroPorId(idLibro);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const obtenerLibrosViewTablaConDeseados = async (req, res) => {
    let result = [];
    const idUsuario = req.params.idUsuario;
    try {
        result = await libros.obtenerLibrosViewTablaConDeseados(idUsuario);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const crearLibro = async (req, res) => {
    const data = Object.values(req.body);
    let result = {};
    try {
        result = await libros.crearLibro(data);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const editarLibro = async (req, res) => {
    const data = Object.values(req.body);
    let result = {};
    try {
        result = await libros.editarLibro(data);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const disableLibro = async (req, res) => {
    let result = [];
    const idLibro = req.params.idLibro;
    try {
        result = await libros.disableLibro(idLibro);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

module.exports = {
    obtenerLibros,
    obtenerConteoDashboard,
    obtenerLibrosViewTabla,
    obtenerLibroPorId,
    obtenerLibrosViewTablaConDeseados,
    crearLibro,
    editarLibro,
    disableLibro,
};

