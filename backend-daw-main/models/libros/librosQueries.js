module.exports = {

    obtenerLibros: `SELECT * FROM libros WHERE estado = 'A' `,

    obtenerLibrosViewTabla: `SELECT l.idLibro, l.nombreLibro, l.descripcion, l.yearPublicacion, l.noPaginas, l.precio, a.nombreAutor, c.nombreColeccion, l.estado, l.createdBy
        FROM libros l 
            INNER JOIN autores a ON a.idAutor = l.idAutor
            INNER JOIN coleccion c ON c.idColeccion = l.idColeccion
        WHERE l.estado = 'A' `,

    obtenerLibroPorId: `SELECT * FROM libros WHERE idLibro = ?;`,

    crearLibro: `INSERT INTO libros(nombreLibro, descripcion, yearPublicacion, noPaginas, precio, idAutor, idColeccion, estado, createdBy) VALUES ?`,

    editarLibro: `UPDATE libros SET nombreLibro = ?, descripcion = ?, yearPublicacion = ?, noPaginas = ?, precio = ?, idAutor = ?, idColeccion = ? WHERE idLibro = ?`,

    disableLibro: `UPDATE libros SET estado = 'I' WHERE idLibro = ?`,

};