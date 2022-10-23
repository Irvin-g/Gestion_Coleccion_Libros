const mysql = require('mysql');
const config = require("./config");

const pool = mysql.createPool({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.db_database,
    port: config.db_port,
});

const connect = () => new Promise((resolve, reject) => {
    pool.getConnection(function(error, connection) {
        if (error) {
            console.log("Error al conectarse a la base de datos.");
            reject(error);
        };
        console.log("Conectado correctamente.");
        resolve(connection);
    });
});

const query = (...args) => new Promise((resolve, reject) => {
    pool.query(...args, (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results);
    });
});

module.exports = {query, connect};