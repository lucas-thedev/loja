let mysql = require('mysql');

let functions = {
     setEditValues(values) {
        return new Promise((resolve) => {

            let valuesKeys = Object.keys(values);
            let formattedValues = '';

            valuesKeys.forEach((value, index) => {
                formattedValues += value + ' = ' + escape(values[value]) + ',';
            });
            
            formattedValues = formattedValues.slice(0, formattedValues.length - 1);
            resolve(formattedValues);
        })
    },

    handleError(res) {
        if (res.hasOwnProperty('error')) {
            return true;
        } else {
            return false;
        }
    }
}

function escape(values) {
    return mysql.escape(values);
}

module.exports = functions;