const saleHelper = require('./saleHelper');

let saleController = {

    listSales (req, res) {
        saleHelper.listSales()
            .then((response) =>{
                return  res.json(response);
        });
    },

    createSale (req, res) {
        let body = req.body;
        saleHelper.createSale(body)
        .then((response) =>{
            if (response.error) {
                res.status(503);
            }
            return res.json(response);
        });
    },
    
}

module.exports = saleController;