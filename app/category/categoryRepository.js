const sql = require('../../database/queries');
const categoryModel = require('./category');

let categoryRepository = {
    listCategory() {
        return new Promise((resolve, reject) => {

            let queryCommand = 'SELECT * FROM category INNER JOIN (SELECT name as product, product.id as productId, deleted_at, categoryId, categoryOrder FROM product WHERE product.deleted_at IS NULL ORDER BY categoryOrder ASC) AS product ON product.categoryId=category.id WHERE deleted_at IS NULL;';

            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        })
    },

    /*getClient(id) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'SELECT * FROM client WHERE deleted_at IS NULL AND client.CPF =' + id + ';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        })
    },

    createClient(values) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'INSERT INTO client (' + clientModel + ') VALUES (' + values + ');';
            console.log(queryCommand)
            sql.query(queryCommand).then((res) => {
                console.log(res)
                queryCommand = 'SELECT MAX(id) as createID FROM client;';
                sql.query(queryCommand).then((response) => {
                    resolve(response);
                })
            });
        })
    },

    editClient(values, id) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'UPDATE client SET ' + values + ' WHERE client.CPF = ' + id +';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });   
    },

    deleteClient(value, id) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'UPDATE client SET deleted_at = ' + value + ' WHERE client.CPF = ' + id +';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });
    }*/

}

module.exports = categoryRepository;