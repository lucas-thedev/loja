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
}

module.exports = productController;