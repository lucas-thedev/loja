const priceRepository = require('./priceRepository');
const mysql = require('mysql');
const utils = require('../../utils/functions');


let priceHelper = {

    createPrice (values) {
        return new Promise((resolve) => {

            let valuesAsArray = Object.values(values);
            let formattedValues = escape(valuesAsArray);

            priceRepository.createPrice(formattedValues)
                .then((response) =>{
                    resolve(response);
                });
        });

    },

    editPrice (body, id) {
        return new Promise((resolve) => {

            utils.setEditValues(body).then((updatedQueryValues) => {

                priceRepository.editPrice(id, updatedQueryValues)
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



module.exports = priceHelper;