const categoryRepository = require('./categoryRepository');
const mysql = require('mysql');
const moment = require('moment');
const utils = require('../../utils/functions')


let categoryHelper = {

    listCategory () {
        return new Promise((resolve, reject) => {

            categoryRepository.listCategory()
                .then((response) =>{
                    resolve(response);
                }); 
        });

    },

    getCategory (id) {
        return new Promise((resolve, reject) => {

            categoryRepository.getCategory(id)
                .then((response) =>{
                    resolve(response);
                }); 
        });

    },

    createCategory (values) {
        return new Promise((resolve, reject) => {

            let valuesAsArray = Object.values(values);
            let formattedValues = escape(valuesAsArray);

            categoryRepository.createCategory(formattedValues)
                .then((response) =>{
                    resolve(response);
                });
        });

    },

    editCategory (values, id) {
        return new Promise((resolve, reject) => {

            utils.setEditValues(values).then((formattedValues) => {
                
                categoryRepository.editCategory(formattedValues, id)
                .then((response) =>{
                    resolve(response);
                });
            });

        });

    },

    deleteCategory (id) {
        return new Promise((resolve, reject) => {

            let date = escape(moment().format('YYYY-MM-DD HH:mm:ss'));

            categoryRepository.deleteCategory(date, id)
                .then((response) =>{
                    resolve(response);
                });
                
        });
    }

}

function escape(values) {
    return mysql.escape(values);
}



module.exports = categoryHelper;