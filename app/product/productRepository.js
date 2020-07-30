const sql = require('../../database/queries');
const productModel = require('./product');

let productRepository = {

    createProduct(values) {
        return new Promise((resolve) => {
            let queryCommand = 'INSERT INTO product (' + productModel + ') VALUES (' + values + ');';
            sql.query(queryCommand).then((res) => {
                queryCommand = 'SELECT MAX(id) as productID FROM product;';
                sql.query(queryCommand).then((response) => {
                    resolve(response);
                })
            });
        });
    },

    listProducts() {
        return new Promise((resolve) => {
            let queryCommand = 'SELECT * FROM mydb.product INNER JOIN code ON codeId=code.id INNER JOIN price ON priceId=price.id INNER JOIN stock ON stockID=stock.id INNER JOIN product_features ON featuresId=product_features.id WHERE deleted_at IS NULL;';
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });
    },

    getProduct(id) {
        return new Promise((resolve) => {
            let queryCommand = 'SELECT * FROM mydb.product INNER JOIN code ON codeId=code.id INNER JOIN price ON priceId=price.id INNER JOIN stock ON stockID=stock.id INNER JOIN product_features ON featuresId=product_features.id WHERE deleted_at IS NULL AND product.id=' + id + ';';
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });
    },

    updateProduct (values, id) {
        return new Promise((resolve) => {
            let queryCommand = 'UPDATE product SET ' + values + ' WHERE product.id = ' + id +';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });
    },


    deleteProduct (values, id) {
        return new Promise((resolve) => {
            let queryCommand = 'UPDATE product SET deleted_at = ' + values + ' WHERE product.id = ' + id +';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });
    },

}

module.exports = productRepository;