const sql = require('../../database/queries');
const orderModel = require('./order');
const utils = require('../../utils/functions');

let orderRepository = {
    listOrders() {
        return new Promise((resolve) => {

            let queryCommand = 'SELECT ordering.status, ordering.created_at, ordering.number, order_product.orderId, order_product.productId, product.name AS productName, ordering.clientId FROM mydb.ordering JOIN order_product ON ordering.id = order_product.orderId JOIN product ON product.id = order_product.productId;';

            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        })
    },

    listOrdersByClient(id) {
        return new Promise((resolve) => {

            let queryCommand = 'SELECT ordering.status, ordering.created_at, ordering.number, order_product.orderId, order_product.productId, product.name AS productName FROM mydb.ordering JOIN order_product ON ordering.id = order_product.orderId JOIN product ON product.id = order_product.productId WHERE ordering.clientId=' + id + ';';

            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        })
    },


    createOrder(values) {
        return new Promise((resolve) => {
            let queryCommand = 'INSERT INTO ordering (' + orderModel + ') VALUES (' + values + ');';
            sql.query(queryCommand).then((res) => {

                if(utils.handleError(res)) resolve(res);

                queryCommand = 'SELECT MAX(id) as orderID FROM ordering;';
                sql.query(queryCommand).then((response) => {
                    resolve(response);
                })
            });
        })
    },

    createOrderProduct(values) {
        return new Promise((resolve) => {
            let queryCommand = 'INSERT INTO ordering (' + orderModel + ') VALUES (' + values + ');';
            sql.query(queryCommand).then((res) => {
                console.log(res)
                queryCommand = 'SELECT MAX(id) as orderID FROM ordering;';
                sql.query(queryCommand).then((response) => {
                    resolve(response);
                })
            });
        })
    }

}

module.exports = orderRepository;