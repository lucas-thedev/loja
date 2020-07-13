const imagesRepository = require('./imagesRepository');
const mysql = require('mysql');

let imagesHelper = {

    createThumbnail(body, productId) {
        return new Promise((resolve) => {

            let thumb = [escape(body.path), escape(body.filename), productId.product, 'true'];

            imagesRepository.createProductImage(thumb)
                .then((response) =>{
                    resolve(response);
            });
        })

    },
}


function escape(values) {
    return mysql.escape(values);
}


module.exports = imagesHelper;