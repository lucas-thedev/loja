const clientRepository = require('./clientRepository');
const mysql = require('mysql');
const moment = require('moment');
const utils = require('../../utils/functions');
const bcrypt = require('bcrypt');

let clientHelper = {

    listClients () {
        return new Promise((resolve, reject) => {

            clientRepository.listClients()
                .then((response) =>{
                    resolve(response);
                }); 
        });

    },

    getClient (id) {
        return new Promise((resolve, reject) => {

            clientRepository.getClient(id)
                .then((response) =>{
                    resolve(response);
                }); 
        });

    },

    createClient (values) {
        return new Promise((resolve, reject) => {
            encryptPassword(values.password).then((encryptedPassword) => {
                values.password = encryptedPassword;
                let valuesAsArray = Object.values(values);
                valuesAsArray.push(moment().format('YYYY-MM-DD HH:mm:ss'));
                valuesAsArray.push(null);
                let formattedValues = escape(valuesAsArray);
    
                
                clientRepository.createClient(formattedValues)
                    .then((response) =>{
                        resolve(response);
                    });
            });
        });

    },

    editClient (values, id) {
        return new Promise((resolve, reject) => {

            utils.setEditValues(values).then((formattedValues) => {
                
                clientRepository.editClient(formattedValues, id)
                .then((response) =>{
                    resolve(response);
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
                });
                
        });
    }

}

function escape(values) {
    return mysql.escape(values);
}

function encryptPassword(password) {
    return new Promise((resolve) => {
        let salt = 10;
        bcrypt.hash(password, salt, (err, encrypted) => {
            resolve(encrypted);
        })
    })
}



module.exports = clientHelper;