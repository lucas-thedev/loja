let express = require('express');
let router = express.Router();
let clientController = require('./app/client/clientController');
let productController = require('./app/product/productController');
const codeHelper = require('./app/code/codeHelper');

//clients
router.get('/clients', clientController.listClients);
router.get('/clients/:id', clientController.getClient);
router.post('/clients', clientController.createClient);
router.put('/clients/:id', clientController.editClient);
router.put('/clients/delete/:id', clientController.deleteClient);

//products
router.get('/products', productController.listProducts);





router.post('/test', codeHelper.editCode);




module.exports = router;