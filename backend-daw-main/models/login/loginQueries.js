module.exports = {

    getData: `SELECT * FROM usuarios `,

    findByEmail: `SELECT * FROM usuarios WHERE email = ?;`,

    createUser: `INSERT INTO usuarios(email, nombreUsuario, apellidoUsuario, password) VALUES ?`,


};