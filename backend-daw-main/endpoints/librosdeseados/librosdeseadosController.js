"use strict";
const libros = require("../../models/librosdeseados/librosdeseados");

const obtenerLibrosDeseados = async (req, res) => {
    let result = [];
    const idUsuario = req.params.idUsuario;
    try {
        result = await libros.obtenerLibrosDeseados(idUsuario);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const nuevoLibroDeseado = async (req, res) => {
    const data = Object.values(req.body);
    let result = {};
    try {
        result = await libros.nuevoLibroDeseado(data);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const eliminarLibroDeseado = async (req, res) => {
    let result = [];
    const idLibroDeseado = req.params.idLibroDeseado;
    try {
        result = await libros.eliminarLibroDeseado(idLibroDeseado);
    } catch (e) {
        console.log(e); 
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const obtenerComentariosLibro = async (req, res) => {
    let result = [];
    const idLibro = req.params.idLibro;
    try {
        result = await libros.obtenerComentariosLibro(idLibro);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

const nuevoComentario = async (req, res) => {
    const data = Object.values(req.body);
    let result = {};
    try {
        result = await libros.nuevoComentario(data);
    } catch (e) {
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

module.exports = {
    obtenerLibrosDeseados,
    obtenerComentariosLibro,
    nuevoLibroDeseado,
    nuevoComentario,
    eliminarLibroDeseado,
};

