const express = require('express');
const router = express.Router();
let multer  = require('multer');
let upload = multer({ dest: './assets/uploads' });
const clientController = require('./app/client/clientController');
const stockController = require('./app/stock/stockController');
const codeController = require('./app/code/codeController');
const productFeaturesController = require('./app/productFeatures/productFeaturesController');
const imagesController = require('./app/images/imagesController');

//clients
router.get('/clients', clientController.listClients);
router.get('/clients/:id', clientController.getClient);
router.post('/clients', clientController.createClient);
router.put('/clients/:id', clientController.editClient);
router.put('/clients/delete/:id', clientController.deleteClient);

//stock 
router.get('/stock/:id', stockController.getStock);
router.put('/stock/add/:id', stockController.addItem);
router.put('/stock/remove/:id', stockController.removeItem);
router.put('/stock/min-qnt/:id', stockController.alterMinQuantity);

//code
router.put('/code/:id', codeController.editCode);

//product features
router.put('/product-features/:id', productFeaturesController.updateProductFeatures);

//images 
router.post('/images', upload.single('thumbnail'), imagesController.createThumbnail);




module.exports = router;