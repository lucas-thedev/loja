const express = require('express');
const router = express.Router();
const clientController = require('./app/client/clientController');
const productController = require('./app/product/productController');
const stockController = require('./app/stock/stockController');

//clients
router.get('/clients', clientController.listClients);
router.get('/clients/:id', clientController.getClient);
router.post('/clients', clientController.createClient);
router.put('/clients/:id', clientController.editClient);
router.put('/clients/delete/:id', clientController.deleteClient);

//products
router.get('/products', productController.listProducts);

//stock 
router.get('/stock/:id', stockController.getStock);
router.put('/stock/add/:id', stockController.addItem);
router.put('/stock/remove/:id', stockController.removeItem);
router.put('/stock/minQnt/:id', stockController.alterMinQuantity);




module.exports = router;