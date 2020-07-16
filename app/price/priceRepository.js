const sql = require('../../database/queries');
const priceModel = require('./price');

let priceRepository = {

    createPrice(values) {
        return new Promise((resolve) => {
            let queryCommand = 'INSERT INTO price (' + priceModel + ') VALUES (' + values + ');';
            sql.query(queryCommand).then(() => {
                queryCommand = ' SELECT LAST_INSERT_ID() as price;'
                sql.query(queryCommand).then((response) => {
                    resolve(response);
                })
            });
        });
    },

    editPrice (id, values) {
        return new Promise((resolve) => {
            let queryCommand = 'UPDATE price SET ' + values + ' WHERE price.id = ' + id +';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });
    },

}

module.exports = priceRepository;