const sql = require('../../database/queries');
const imagesModel = require('./images');

let imagesRepository = {

    createProductImage(values) {
        console.log(values)
        return new Promise((resolve) => {
            let queryCommand = 'INSERT INTO product_images (' + imagesModel + ') VALUES (' + values + ');';
            sql.query(queryCommand).then(() => {
                queryCommand = ' SELECT LAST_INSERT_ID() as productImages;'
                sql.query(queryCommand).then((response) => {
                    resolve(response);
                })
            });
        });
    },

}

module.exports = imagesRepository;