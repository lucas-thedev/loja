const sql = require('../../database/queries');
const productFeaturesModel = require('./productFeatures');

let productFeaturesRepository = {

    createProductFeatures(values) {
        return new Promise((resolve) => {
            let queryCommand = 'INSERT INTO product_features (' + productFeaturesModel + ') VALUES (' + values + ');';
            sql.query(queryCommand).then(() => {
                queryCommand = ' SELECT LAST_INSERT_ID() as productFeatures;'
                sql.query(queryCommand).then((response) => {
                    resolve(response);
                })
            });
        });
    },

    getProductFeatures(id) {
        return new Promise((resolve) => {
            let queryCommand = 'SELECT * FROM product_features WHERE product_features.id =' + id + ';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });
    },

    updateProductFeatures (id, values) {
        return new Promise((resolve) => {
            let queryCommand = 'UPDATE product_features SET ' + values + ' WHERE product_features.id = ' + id +';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });
    },

}

module.exports = productFeaturesRepository;