const sql = require('../../database/queries');
const productFeaturesModel = require('./productFeatures');
const utils = require('../../utils/functions');

let productFeaturesRepository = {

    createProductFeatures(values) {
        return new Promise((resolve) => {
            let queryCommand = 'INSERT INTO product_features (' + productFeaturesModel + ') VALUES (' + values + ');';
            sql.query(queryCommand).then((res) => {

                if(utils.handleError(res)) resolve(res);

                queryCommand = 'SELECT MAX(id) as productFeaturesID FROM product_features;';
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