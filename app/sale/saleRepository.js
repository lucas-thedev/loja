const sql = require('../../database/queries');
const saleModel = require('./sale');
const utils = require('../../utils/functions');

let saleRepository = {
    listSales() {
        return new Promise((resolve) => {

            let queryCommand = 'SELECT * FROM sale;';

            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        })
    },

    createSale(values) {
        return new Promise((resolve) => {
            let queryCommand = 'INSERT INTO sale (' + saleModel + ') VALUES (' + values + ');';
            sql.query(queryCommand).then((res) => {

                if(utils.handleError(res)) resolve(res);

                queryCommand = 'SELECT MAX(id) as saleID FROM sale;';
                sql.query(queryCommand).then((response) => {
                    resolve(response);
                })
            });
        })
    },

}

module.exports = saleRepository; 