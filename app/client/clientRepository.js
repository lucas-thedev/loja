const sql = require('../../database/queries');
const clientModel = require('./client');

let clientRepository = {
    listClients() {
        return new Promise((resolve, reject) => {

            let queryCommand = 'SELECT * FROM client WHERE deleted_at IS NULL;'

            sql.query(queryCommand).then((clients) => {

                queryCommand = 'SELECT count(*) as count FROM client WHERE deleted_at IS NULL;'

                sql.query(queryCommand).then((count) => {
                    resolve({clients, count});
                }, error => {
                    console.log(error);
                    reject();
                });
                
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
            let queryCommand = 'INSERT INTO client (' + clientModel + ') VALUES (' + values + ')';
            sql.query(queryCommand).then((response) => {
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