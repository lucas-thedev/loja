let clientRepository = require('./clientRepository');
let mysql = require('mysql');
let moment = require('moment');


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

            let formattedValues = escape(values);

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

            setEditValues(values).then((formattedValues) => {
                
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

function setEditValues(values) {
    return new Promise((resolve) => {
        let valuesKeys = Object.keys(values);
        let formattedValues = '';
        valuesKeys.forEach((value, index) => {
            formattedValues += value + ' = ' + escape(values[value]) + ',';
        });
        formattedValues = formattedValues.slice(0, formattedValues.length - 1);
        resolve(formattedValues);
    })
}

module.exports = clientHelper;