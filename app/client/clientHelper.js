const clientRepository = require('./clientRepository');
const mysql = require('mysql');
const moment = require('moment');
const utils = require('../../utils/functions')


let clientHelper = {

    listClients () {
        return new Promise((resolve, reject) => {

            clientRepository.listClients()
                .then((response) =>{
                    resolve(response);
                }, error => {
                    console.log(error);
                    reject();
                }); 
        });

    },

    getClient (id) {
        return new Promise((resolve, reject) => {

            clientRepository.getClient(id)
                .then((response) =>{
                    resolve(response);
                }, error => {
                    console.log(error);
                    reject();
                }); 
        });

    },

    createClient (values) {
        return new Promise((resolve, reject) => {

            let valuesAsArray = Object.values(values);
            let formattedValues = escape(valuesAsArray);

            clientRepository.createClient(formattedValues)
                .then((response) =>{
                    resolve(response);
                }, error => {
                    console.log(error);
                    reject();
            });
        });

    },

    editClient (values, id) {
        return new Promise((resolve, reject) => {

            utils.setEditValues(values).then((formattedValues) => {
                
                clientRepository.editClient(formattedValues, id)
                .then((response) =>{
                    resolve(response);
                }, error => {
                    console.log(error);
                    reject();
                });
            });

        });

    },

    deleteClient (id) {
        return new Promise((resolve, reject) => {

            let date = escape(moment().format('YYYY-MM-DD HH:mm:ss'));

            clientRepository.deleteClient(date, id)
                .then((response) =>{
                    resolve(response);
                }, error => {
                    console.log(error);
                    reject();
                });
                
        });
    }

}

function escape(values) {
    return mysql.escape(values);
}



module.exports = clientHelper;