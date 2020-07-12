const stockHelper = require('./stockHelper');

let stockController = {

    getStock(req, res) {

        let id = req.params.id;

        stockHelper.getStock(id)
            .then((response) =>{
                if (response.error) {
                    res.status(503);
                }
                return res.json(response);
        });
    },

    addItem(req, res) {

        let id = req.params.id;
        let addValue = req.body;

        stockHelper.addItem(id, addValue)
        .then((response) =>{
            if (response.error) {
                res.status(503);
            }
            return res.json(response);
        });
    },

    removeItem(req, res) {

        let id = req.params.id;
        let body = req.body;

        stockHelper.removeItem(id, body)
        .then((response) =>{
            if (response.error) {
                res.status(503);
            }
            return res.json(response);
        });
    },

    alterMinQuantity(req, res) {

        let id = req.params.id;
        let alterValue = req.body;

        stockHelper.alterMinQuantity(id, alterValue)
        .then((response) =>{
            if (response.error) {
                res.status(503);
            }
            return res.json(response);
        });
    },

}

module.exports = stockController;