const sql = require('../../database/queries');
const productModel = require('./product');

let productRepository = {

    createProduct(values) {
        return new Promise((resolve) => {
            let queryCommand = 'INSERT INTO product (' + productModel + ') VALUES (' + values + ');';
            sql.query(queryCommand).then((res) => {
                console.log(res)
                queryCommand = 'SELECT MAX(id) as productID FROM product;';
                sql.query(queryCommand).then((response) => {
                    resolve(response);
                })
            });
        });
    },

    getProduct(id) {
        return new Promise((resolve) => {
            let queryCommand = 'SELECT * FROM product WHERE product.id =' + id + ';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });
    },

    updateProduct (id, values) {
        return new Promise((resolve) => {
            let queryCommand = 'UPDATE product SET ' + values + ' WHERE product.id = ' + id +';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });
    },

}

module.exports = productRepository;