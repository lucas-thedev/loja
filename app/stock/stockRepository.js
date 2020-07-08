const sql = require('../../database/queries');
const stockModel = require('./stock');

let clientRepository = {

    createStock(values) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'INSERT INTO stock (' + stockModel + ') VALUES (' + values + ')';
            sql.query(queryCommand).then((response) => {
                resolve(response);
            }, error => {
                console.log(error);
                reject();
            });
        })
    },

    getStock(id) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'SELECT * FROM stock WHERE stock.id =' + id + ';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            }, error => {
                console.log(error);
                reject();
            });
        })
    },

    updateItemQnt (id, values) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'UPDATE stock SET ' + values + ' WHERE stock.id = ' + id +';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            }, error => {
                console.log(error);
                reject();
            });
        })
    },

}

module.exports = clientRepository;