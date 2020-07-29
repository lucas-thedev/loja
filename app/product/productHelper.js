//const productRepository = require('./productRepository');
const mysql = require('mysql');
const utils = require('../../utils/functions');
const codeHelper = require('../code/codeHelper');
const priceHelper = require('../price/priceHelper');
const stockHelper = require('../stock/stockHelper');
const productFeaturesHelper = require('../productFeatures/productFeaturesHelper');
const productRepository = require('./productRepository');


let productHelper = {

    createProduct (body) {
        return new Promise((resolve) => {

            let code = createCode(body.code);
            let price = priceHelper.createPrice(body.price);
            let stock = stockHelper.createStock(body.stock);
            let features = productFeaturesHelper.createProductFeatures(body.features);

            Promise.all([code, price, stock, features]).then((res) => {

                let productBody = {
                    code: res[0][0].codeID,
                    name: body.name,
                    price: res[1][0].priceID,
                    stock: res[2][0].stockID,
                    status: body.status,
                    featuresHS: body.featuresHomeScreen,
                    categoryOrder: body.categoryOrder,
                    features: res[3][0].productFeaturesID
                    created_at
                }

                let valuesAsArray = Object.values(productBody);
                let formattedValues = escape(valuesAsArray);

                productRepository.createProduct(formattedValues)
                .then((response) =>{
                    resolve(response);
                });


            });

        });
    },

    listProducts () {
        return new Promise((resolve, reject) => {

            productRepository.listProducts()
                .then((response) =>{
                    resolve(response);
                }); 
        });

    },

    getProduct (id) {
        return new Promise((resolve, reject) => {

            productRepository.getProduct(id)
                .then((response) =>{
                    resolve(response);
                }); 
        });

    },

    updateProduct(body, id) {
        return new Promise((resolve, reject) => {

            utils.setEditValues(body).then((formattedValues) => {

                productRepository.updateProduct(formattedValues, id)
                .then((response) =>{
                    resolve(response);
                }); 

            })

        });
    }

}

function escape(values) {
    return mysql.escape(values);
}

function createCode(code) {
    return new Promise((resolve) => {
        if (code.isAutoGenerated) {
            codeHelper.createCodeAuto().then((value) => {
                resolve(value);
            });
        } else {
            codeHelper.createCode(code.value).then((value) => {
                resolve(value);
            });
        }
    })
}



module.exports = productHelper;