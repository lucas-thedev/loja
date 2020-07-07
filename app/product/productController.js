let productHelper = require('./productHelper');

let productController = {

    listProducts (req, res) {
        productHelper.listProducts()
            .then((response) =>{
                return  res.json(response);
        });
    },

    /*getClient(req, res) {

        let id = req.params.id;

        productHelper.getClient(id)
            .then((response) =>{
                return  res.json(response);
        });
    },

    createClient (req, res) {
        let body = ["09970100687", "rachel", "bay", "10", "24500235", "arcadia bay", "oregon", "eua", "aaa@aaa.com", "123456", "5550123", "active", "2016-12-01 12:32:00.000", null, "normal"];
        productHelper.createClient(body)
            .then((response) =>{
                return  res.json(response);
        });
    },

    editClient (req, res) {

        let body = {
            name: "max",
            email: "email@example.com"
        }

        let id = req.params.id;

        productHelper.editClient(body, id)
            .then((response) => {
                return res.json(response);
            });
    },

    deleteClient (req, res) {

        let id = req.params.id;

        productHelper.deleteClient(id)
            .then((response) => {
                return res.json(response);
            });
    }*/


}

module.exports = productController;