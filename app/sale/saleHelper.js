const saleRepository = require('./saleRepository');
const mysql = require('mysql');
const moment = require('moment');

let saleHelper = {

    listSales () {
        return new Promise((resolve, reject) => {

            saleRepository.listSales()
                .then((response) =>{
                    resolve(response);
                }); 
        });

    },

    createSale (values) {
        return new Promise((resolve, reject) => {

            let valuesAsArray = Object.values(values);
            valuesAsArray.push(moment().format('YYYY-MM-DD HH:mm:ss'));
            let formattedValues = escape(valuesAsArray);

            saleRepository.createSale(formattedValues)
                .then((orderID) =>{
                    resolve(orderID);
                });
        });

    },

}

function escape(values) {
    return mysql.escape(values);
}

module.exports = saleHelper;