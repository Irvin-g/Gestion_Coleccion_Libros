module.exports = {

    obtenerLibrosDeseados: `SELECT ld.idLibroDeseado, l.idLibro, l.nombreLibro, l.descripcion, l.yearPublicacion, l.noPaginas, l.precio, a.nombreAutor, c.nombreColeccion, l.estado, l.createdBy
    FROM librosdeseados ld 
    INNER JOIN libros l ON l.idLibro = ld.idLibro
        INNER JOIN autores a ON a.idAutor = l.idAutor
       INNER JOIN coleccion c ON c.idColeccion = l.idColeccion
    WHERE ld.idUsuario = ? `,

    nuevoLibroDeseado: `INSERT INTO librosdeseados(idLibro, idUsuario) VALUES ?`,

    eliminarLibroDeseado: `DELETE FROM librosdeseados WHERE idLibroDeseado = ?`,

    obtenerComentariosLibro: `SELECT c.*, u.nombreUsuario, u.apellidoUsuario FROM comentarios c 
        INNER JOIN usuarios u ON u.idUsuario = c.idUsuario
        WHERE c.idLibro = ?`,

    nuevoComentario: `INSERT INTO comentarios(idUsuario, idLibro, comentario) VALUES ?`,

};