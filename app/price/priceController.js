const priceHelper = require('./priceHelper');

let priceController = {

    editPrice(req, res) {
        
        let body = req.body;
        let id = req.params.id;

        priceHelper.editPrice(body, id)
            .then((response) =>{
                if (response.error) {
                    res.status(503);
                }
                return res.json(response);
        });
    },
}

module.exports = priceController;