let sql = require('../../database/queries');
let mysql = require('mysql');

let clientRepository = {
    listClients() {
        return new Promise((resolve, reject) => {
            let queryCommand = 'SELECT * FROM client WHERE deleted_at IS NULL;'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            }, error => {
                console.log(error);
                reject();
            });
        })
    },

    getClient(id) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'SELECT * FROM client WHERE deleted_at IS NULL AND client.CPF =' + id + ';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            }, error => {
                console.log(error);
                reject();
            });
        })
    },

    createClient(values) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'INSERT INTO client (CPF, name, street, houseNumber, zipCode, city, state, country, email, password, phone, status, created_at, deleted_at) VALUES (' + values + ')';
            sql.query(queryCommand, [values]).then((response) => {
                resolve(response);
            }, error => {
                console.log(error);
                reject();
            });
        })
    },

    editClient(values, id) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'UPDATE client SET ' + values + ' WHERE client.CPF = ' + id +';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            }, error => {
                console.log(error);
                reject();
            });
        })    },

    deleteClient(value, id) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'UPDATE client SET deleted_at = ' + value + ' WHERE client.CPF = ' + id +';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            }, error => {
                console.log(error);
                reject();
            });
        })
    }

}

module.exports = clientRepository;