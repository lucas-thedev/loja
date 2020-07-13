const sql = require('../../database/queries');
const stockModel = require('./stock');

let stockRepository = {

    createStock(values) {
        return new Promise((resolve) => {
            let queryCommand = 'INSERT INTO stock (' + stockModel + ') VALUES (' + values + ');';
            sql.query(queryCommand).then(() => {
                queryCommand = ' SELECT LAST_INSERT_ID() as stock;'
                sql.query(queryCommand).then((response) => {
                    resolve(response);
                })
            });
        });
    },

    getStock(id) {
        return new Promise((resolve) => {
            let queryCommand = 'SELECT * FROM stock WHERE stock.i =' + id + ';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });
    },

    updateItemQnt (id, values) {
        return new Promise((resolve) => {
            let queryCommand = 'UPDATE stock SET ' + values + ' WHERE stock.id = ' + id +';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });
    },

}

module.exports = stockRepository;