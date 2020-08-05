const orderRepository = require('./orderRepository');
const mysql = require('mysql');
const moment = require('moment');
const uniqid = require('uniqid');



let orderHelper = {

    listOrders () {
        return new Promise((resolve, reject) => {

            orderRepository.listOrders()
                .then((response) =>{
                    resolve(response);
                }); 
        });

    },

    listOrdersByClient (id) {
        return new Promise((resolve, reject) => {

            orderRepository.listOrdersByClient(id)
                .then((response) =>{
                    resolve(response);
                }); 
        });

    },

    createOrder (values) {
        return new Promise((resolve, reject) => {

            let valuesAsArray = Object.values(values);
            let productIds = valuesAsArray[2];
            valuesAsArray = valuesAsArray.slice(0, 2);
            valuesAsArray.push(generateOrderNumber());
            valuesAsArray.push(moment().format('YYYY-MM-DD HH:mm:ss'));
            let formattedValues = escape(valuesAsArray);


            orderRepository.createOrder(formattedValues)
                .then((orderID) =>{
                    resolve(orderID);
                });
        });

    },

}

function escape(values) {
    return mysql.escape(values);
}

function generateOrderNumber() {
    return uniqid();
}



module.exports = orderHelper;