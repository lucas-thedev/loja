const imagesRepository = require('./imagesRepository');
const mysql = require('mysql');
const utils = require('../../utils/functions')


let imagesHelper = {

    createThumbnail(body, productId) {
        return new Promise((resolve) => {

            let thumb = [escape(body.path), escape(body.filename), productId.product, 'true', 'true'];

            imagesRepository.createProductImage(thumb)
                .then((response) =>{
                    resolve(response);
            });
        })

    },

    createImages(body, productId) {
        return new Promise((resolve) => {

            let values = formatCreateValues(body, productId);
            imagesRepository.createProductImage(values)
                .then((response) =>{
                    resolve(response);
            });
        })

    },

    editImages(id, config) {
        return new Promise((resolve, reject) => {

            utils.setEditValues(config).then((formattedValues) => {
                
                imagesRepository.editImages(formattedValues, id)
                .then((response) =>{
                    resolve(response);
                });
            });

        });

    },
}

function formatCreateValues(values, productId) {
    let images = '';
    values.forEach((item) => {
        images += '(' + escape(item.path) + ',' + escape(item.filename) + ',' + productId.product.toString() + ', false, true),';
    });

    images = images.slice(0, images.length - 1);
    return images;
}

function escape(values) {
    return mysql.escape(values);
}


module.exports = imagesHelper;