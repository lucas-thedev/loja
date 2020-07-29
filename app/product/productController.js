const productHelper = require('./productHelper');

let productController = {

    createProduct(req, res) {
        
        let body = req.body;

        productHelper.createProduct(body)
            .then((response) =>{
                if (response.error) {
                    res.status(503);
                }
                return res.json(response);
        });
    },

    listProducts(req, res) {
        
        productHelper.listProducts()
            .then((response) =>{
                if (response.error) {
                    res.status(503);
                }
                return res.json(response);
        });
    },

    getProduct(req, res) {

        let id = req.params.id;
        
        productHelper.getProduct(id)
            .then((response) =>{
                if (response.error) {
                    res.status(503);
                }
                return res.json(response);
        });
    },

    updateProduct(req, res) {

        let id = req.params.id;
        let body = req.body;
        
        productHelper.updateProduct(body, id)
            .then((response) =>{
                if (response.error) {
                    res.status(503);
                }
                return res.json(response);
        });
    },

    deleteProduct(req, res) {

        let id = req.params.id;
        
        productHelper.deleteProduct(id)
            .then((response) =>{
                if (response.error) {
                    res.status(503);
                }
                return res.json(response);
        });
    },
}

module.exports = productController;