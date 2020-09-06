const sql = require('../../database/queries');
const clientModel = require('./client');
const utils = require('../../utils/functions');

let clientRepository = {
    listClients() {
        return new Promise((resolve, reject) => {

            let queryCommand = 'SELECT cpf, name, street, houseNumber, zipCode, state, country, email, phone, status, type, created_at, deleted_at  FROM client WHERE deleted_at IS NULL;'

            sql.query(queryCommand).then((res) => {

                if(utils.handleError(res)) resolve(res);

                queryCommand = 'SELECT count(*) as count FROM client WHERE deleted_at IS NULL;'

                sql.query(queryCommand).then((count) => {
                    resolve({res, count});
                });
                
            });
        })
    },

    getClient(id) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'SELECT * FROM client WHERE deleted_at IS NULL AND client.CPF =' + id + ';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        })
    },

    createClient(values) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'INSERT INTO client (' + clientModel + ') VALUES (' + values + ');';
            sql.query(queryCommand).then((res) => {

                if(utils.handleError(res)) resolve(res);

                queryCommand = 'SELECT MAX(id) as createID FROM client;';
                sql.query(queryCommand).then((response) => {
                    resolve(response);
                })
            });
        })
    },

    editClient(values, id) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'UPDATE client SET ' + values + ' WHERE client.CPF = ' + id +';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });   
    },

    deleteClient(value, id) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'UPDATE client SET deleted_at = ' + value + ' WHERE client.CPF = ' + id +';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });
    }

}

module.exports = clientRepository;