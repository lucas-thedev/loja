const sql = require('../../database/queries');
const categoryModel = require('./category');

let categoryRepository = {
    listCategory() {
        return new Promise((resolve, reject) => {

            let queryCommand = 'SELECT * FROM category INNER JOIN (SELECT name as product, product.id as productId, deleted_at, categoryId, categoryOrder FROM product WHERE product.deleted_at IS NULL ORDER BY categoryOrder ASC) AS product ON product.categoryId=category.id WHERE category.deleted_at IS NULL;';

            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        })
    },

    getCategory(id) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'SELECT * FROM category INNER JOIN (SELECT name as product, product.id as productId, deleted_at, categoryId, categoryOrder FROM product WHERE product.deleted_at IS NULL ORDER BY categoryOrder ASC) AS product ON product.categoryId=category.id WHERE category.deleted_at IS NULL AND category.id=' + id + ';';
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        })
    },

    createCategory(values) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'INSERT INTO category (' + categoryModel + ') VALUES (' + values + ');';
            sql.query(queryCommand).then((res) => {
                queryCommand = 'SELECT MAX(id) as categoryID FROM category;';
                sql.query(queryCommand).then((response) => {
                    resolve(response);
                })
            });
        })
    },

    editCategory(values, id) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'UPDATE category SET ' + values + ' WHERE category.id = ' + id +';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });   
    },

    deleteCategory(value, id) {
        return new Promise((resolve, reject) => {
            let queryCommand = 'UPDATE category SET deleted_at = ' + value + ' WHERE category.id = ' + id +';'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        });
    }

}

module.exports = categoryRepository;