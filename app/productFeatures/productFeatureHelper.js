const productFeaturesRepository = require('./productFeaturesRepository');
const mysql = require('mysql');
const utils = require('../../utils/functions');

let productFeatureHelper = {

    createProductFeatures (values) {
        return new Promise((resolve) => {

            let valuesAsArray = Object.values(values);
            let formattedValues = escape(valuesAsArray);

            productFeaturesRepository.createProductFeatures(formattedValues)
                .then((response) =>{
                    resolve(response);
                });
                
        });

    },

    getProductFeatures (id) {
        return new Promise((resolve, reject) => {

            productFeaturesRepository.getProductFeatures(id)
                .then((response) =>{
                    resolve(response);
                });
        });

    },

    updateProductFeatures (id, body) {
        return new Promise((resolve) => {

            utils.setEditValues(body).then((updatedQueryValues) => {

                productFeaturesRepository.updateProductFeatures(id, updatedQueryValues)
                    .then((response) =>{
                        resolve(response);
                    });

            });

        });
    },

}

function escape(values) {
    return mysql.escape(values);
}

module.exports = productFeatureHelper;