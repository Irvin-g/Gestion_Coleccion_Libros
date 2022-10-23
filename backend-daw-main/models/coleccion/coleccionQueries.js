module.exports = {

    obtenerColecciones: `SELECT * FROM coleccion WHERE estado = 'A' `,

    obtenerColeccionPorId: `SELECT * FROM coleccion WHERE idColeccion = ?;`,

    crearColeccion: `INSERT INTO coleccion(nombreColeccion, descripcion, estado, createdBy) VALUES ?`,

    editarColeccion: `UPDATE coleccion SET nombreColeccion = ?, descripcion = ? WHERE idColeccion = ?`,

    disableColeccion: `UPDATE coleccion SET estado = 'I' WHERE idColeccion = ?`,

};