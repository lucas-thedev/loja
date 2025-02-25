const codeRepository = require('./codeRepository');
const mysql = require('mysql');
const utils = require('../../utils/functions')

let codeHelper = {

    createCode (value) {
        return new Promise((resolve, reject) => {
            checkIfExists(value).then((res) => {
                if (res === 'exist') {
                    resolve({error: 'Código já existe.'});
                } else {
                    let formattedValues = escape(value);
                    codeRepository.createCode(formattedValues)
                    .then((response) =>{
                        resolve(response);
                    });
                }
            });
        });

    },

    createCodeAuto () {
        return new Promise((resolve, reject) => {
            generateAutoCode().then((res) => {
                let formattedValues = escape(res);
                codeRepository.createCode(formattedValues)
                .then((response) =>{
                    resolve(response);
                });
            });
        });

    },

    editCode (values, id) {
        return new Promise((resolve) => {
            if (checkIfNotMatchAutoGenerated(values.code)) {
                utils.setEditValues(values).then((formattedValues) => {
                
                    codeRepository.editCode(formattedValues, id)
                    .then((response) =>{
                        resolve(response);
                    });
                });
            } else {
                resolve({error: 'Código inválido: códigos começados com A são reservados.'});
            }
        });

    },
}

function checkIfExists(value) {
    return new Promise((resolve, reject) => {
        codeRepository.findCodeById(value).then((res) => {
            if (res.length == 0) {
                resolve('dontExist');
            } else {
                resolve('exist');
            }
        });
    });
}

function generateAutoCode() {
    return new Promise((resolve) => {
        codeRepository.findLastAutoGeneratedCode().then((res) => {
            if(res.length === 0) {
                resolve('A0');
            } else {
                let number = res[0].code;
                let code = number.substring(1, number.length);
                let nextCodeNumber = parseInt(code) + 1;
                let nextCode = 'A' + nextCodeNumber.toString();

                resolve(nextCode);
            }
        })
    })
}

function checkIfNotMatchAutoGenerated(code) {
    if (code[0] === 'A') {
        return false;
    } else {
        return true;
    }
}

function escape(values) {
    return mysql.escape(values);
}


module.exports = codeHelper;