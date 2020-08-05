const orderHelper = require('./orderHelper');

let orderController = {

    listOrders (req, res) {
        orderHelper.listOrders()
            .then((response) =>{
                return  res.json(response);
        });
    },

    listOrdersByClient (req, res) {

        let id = req.params.id; 

        orderHelper.listOrdersByClient(id)
            .then((response) =>{
                return  res.json(response);
        });
    },

    createOrder (req, res) {
        let body = req.body;
        orderHelper.createOrder(body)
        .then((response) =>{
            if (response.error) {
                res.status(503);
            }
            return res.json(response);
        });
    },
    
}

module.exports = orderController;