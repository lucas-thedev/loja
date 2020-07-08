const stockRepository = require('./stockRepository');
const mysql = require('mysql');
const utils = require('../../utils/functions');
const nodemailer = require('nodemailer');
const { min } = require('moment');


let stockHelper = {

    createStock (values) {
        return new Promise((resolve, reject) => {

            let valuesAsArray = Object.values(values);
            let formattedValues = escape(valuesAsArray);

            stockRepository.createStock(formattedValues)
                .then((response) =>{
                    resolve(response);
                }, error => {
                    console.log(error);
                    reject();
                }); 
        });

    },

    getStock (id) {
        return new Promise((resolve, reject) => {

            stockRepository.getStock(id)
                .then((response) =>{
                    resolve(response);
                }, error => {
                    console.log(error);
                    reject();
                }); 
        });

    },

    addItem (id, addValue) {
        return new Promise((resolve, reject) => {

            if (!isPositiveInteger(addValue.add.toString())) {
                reject();
            }

            this.getStock(id).then((stock) => {

                let newItemQtn = stock[0].availableProducts + addValue.add;

                utils.setEditValues({availableProducts: newItemQtn}).then((updatedQueryValues) => {

                    stockRepository.updateItemQnt(id, updatedQueryValues)
                    .then((response) =>{
                        resolve(response);
                    }, error => {
                        console.log(error);
                        reject();
                    });

                });

            });
            
        });

    },

    removeItem (id, removeValue) {
        return new Promise((resolve, reject) => {

            if (!isPositiveInteger(removeValue.remove.toString())) {
                reject();
            }

            this.getStock(id).then((stock) => {

                let newItemQtn = stock[0].availableProducts - removeValue.remove;

                utils.setEditValues({availableProducts: newItemQtn}).then((updatedQueryValues) => {

                    stockRepository.updateItemQnt(id, updatedQueryValues)
                    .then((response) =>{

                        checkIfItsMin(stock[0].minAvailableProducts, newItemQtn);

                        resolve(response);
                    }, error => {
                        console.log(error);
                        reject();
                    });

                });

            });
            
        });

    },


    alterMinQuantity (id, alterValue) {
        return new Promise((resolve, reject) => {

            if (!isPositiveInteger(alterValue.value.toString())) {
                reject();
            }

            this.getStock(id).then((stock) => {

                let newItemQtn = alterValue.value;

                utils.setEditValues({minAvailableProducts: newItemQtn}).then((updatedQueryValues) => {

                    stockRepository.updateItemQnt(id, updatedQueryValues)
                    .then((response) =>{
                        resolve(response);
                    }, error => {
                        console.log(error);
                        reject();
                    });

                });

            });
            
        });

    },

}

function escape(values) {
    return mysql.escape(values);
}

function isPositiveInteger(n) {
    return 0 === n % (!isNaN(parseFloat(n)) && 0 <= ~~n);
}

function checkIfItsMin (minQnt, currentValue) {
    if (currentValue <= minQnt) {
        sendEmail();
    }
}

function sendEmail() {

    let transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SENDER_PROVIDER,
        auth: {
          user: process.env.EMAIL_ADRESS_SENDER,
          pass: process.env.EMAIL_ADRESS_SENDER_PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_SENDER_PROVIDER,
        to: process.env.EMAIL_ADRESS_RECEIVER,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}


module.exports = stockHelper;