module.exports = {

    obtenerAutores: `SELECT * FROM autores WHERE estado = 'A' `,

    obtenerAutorPorId: `SELECT * FROM autores WHERE idAutor = ?;`,

    crearAutor: `INSERT INTO autores(nombreAutor, apellidosAutor, nacionalidad, estado, createdBy) VALUES ?`,

    editarAutor: `UPDATE autores SET nombreAutor = ?, apellidosAutor = ?, nacionalidad = ? WHERE idAutor = ?`,

    disableAutor: `UPDATE autores SET estado = 'I' WHERE idAutor = ?`,

};