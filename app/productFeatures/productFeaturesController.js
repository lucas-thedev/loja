const productFeaturesHelper = require('./productFeaturesHelper');

let productFeaturesController = {

    updateProductFeatures(req, res) {

        let id = req.params.id;
        let body = req.body;

        productFeaturesHelper.updateProductFeatures(body, id)
            .then((response) =>{
                if (response.error) {
                    res.status(403);
                }
                return res.json(response);
        });
    },
}

module.exports = productFeaturesController;