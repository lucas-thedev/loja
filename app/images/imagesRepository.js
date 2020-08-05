const sql = require('../../database/queries');
const imagesModel = require('./images');
const utils = require('../../utils/functions');

let imagesRepository = {

    createProductImage(values) {
        return new Promise((resolve) => {
            let queryCommand = 'INSERT INTO product_images (' + imagesModel + ') VALUES (' + values + ');';
            sql.query(queryCommand).then((res) => {
                resolve(res);
            });
        });
    },

    editImages(values, id) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'UPDATE product_images SET ' + values + ' WHERE product_images.id = ' + id +';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });   
    },

    getProductsImages(id) {
        return new Promise((resolve) => {
            let queryCommand = 'SELECT * FROM mydb.product_images WHERE id_product=' + id + ';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });   
    },

    getImage(id) {
        return new Promise((resolve) => {
            let queryCommand = 'SELECT * FROM mydb.product_images WHERE id=' + id + ';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });   
    },

}

module.exports = imagesRepository;