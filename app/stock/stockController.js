const stockHelper = require('./stockHelper');

let stockController = {

    getStock(req, res) {

        let id = req.params.id;

        stockHelper.getStock(id)
            .then((response) =>{
                return  res.json(response);
        });
    },

    addItem(req, res) {

        let id = req.params.id;
        let addValue = req.body;

        stockHelper.addItem(id, addValue)
            .then((response) =>{
                return  res.json(response);
        });
    },

    removeItem(req, res) {

        let id = req.params.id;
        let removeValue = req.body;

        stockHelper.removeItem(id, removeValue)
            .then((response) =>{
                return  res.json(response);
        });
    },

    alterMinQuantity(req, res) {

        let id = req.params.id;
        let alterValue = req.body;

        stockHelper.alterMinQuantity(id, alterValue)
            .then((response) =>{
                return  res.json(response);
        });
    },

}

module.exports = stockController;