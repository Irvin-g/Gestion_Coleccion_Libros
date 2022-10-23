const query = require('../services/database').query;
const queries = require('./loginQueries');

const login = {};

login.getData = () => new Promise((resolve, reject) => {
    query(queries.getData, [], (error, data) => {
        if (error) {
            reject(error);
        } else {
            resolve(data || []);
        }
    });
});

login.findByEmail = (email) => query(queries.findByEmail, [email]);

login.createUser = (data) => new Promise((resolve, reject) => {
    query(queries.createUser, [[data]], (error, login) => {
        if (error) {
            reject(error);
        } else {
            resolve(login || {});
        }
    });
});

module.exports = login;
