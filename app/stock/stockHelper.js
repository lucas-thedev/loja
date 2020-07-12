const stockRepository = require('./stockRepository');
const mysql = require('mysql');
const utils = require('../../utils/functions');
const nodemailer = require('nodemailer');

let stockHelper = {

    createStock (values) {
        return new Promise((resolve, reject) => {

            let valuesAsArray = Object.values(values);
            let formattedValues = escape(valuesAsArray);

            stockRepository.createStock(formattedValues)
                .then((response) =>{
                    resolve(response);
                });
        });

    },

    getStock (id) {
        return new Promise((resolve, reject) => {

            stockRepository.getStock(id)
                .then((response) =>{
                    resolve(response);
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
                    });

                });

            });
            
        });

    },

    removeItem (id, body) {
        return new Promise((resolve, reject) => {

            if (!isPositiveInteger(body.remove.toString())) {
                resolve(403);
            }

            this.getStock(id).then((res) => {
                if (res.error) {
                    resolve(res);
                } else {
                    let newItemQtn = res[0].availableProducts - body.remove;

                    utils.setEditValues({availableProducts: newItemQtn}).then((updatedQueryValues) => {
    
                        stockRepository.updateItemQnt(id, updatedQueryValues)
                        .then((response) =>{
    
                            checkIfItsMin(res[0].minAvailableProducts, newItemQtn, body.product);
    
                            resolve(response);
                        });
    
                    });
                }
    
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

function checkIfItsMin (minQnt, currentValue, product) {
    if (currentValue <= minQnt) {
        sendEmail(minQnt, currentValue, product);
    }
}

function sendEmail(minQnt, currentValue, product) {

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
        subject: 'Atenção: estoque quase acabando!',
        text: 'O estoque do produto ' + product + ' está com ' + currentValue + ' produtos.' + '\n' + 'A quantidade mínima é: ' + minQnt +  '.\nFique atento!'
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