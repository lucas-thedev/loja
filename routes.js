//imports 
const express = require('express');
const path = require('path');
const router = express.Router();
let multer  = require('multer');
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'assets/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  });
const upload = multer({ storage: storage });
const clientController = require('./app/client/clientController');
const stockController = require('./app/stock/stockController');
const codeController = require('./app/code/codeController');
const productFeaturesController = require('./app/productFeatures/productFeaturesController');
const imagesController = require('./app/images/imagesController');
const priceController = require('./app/price/priceController');

// ROUTES ===================================================================================================

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
router.post('/images', upload.array('images'), imagesController.createImages);
router.post('/images/thumbnail', upload.single('thumbnail'), imagesController.createThumbnail);
router.put('/images/config/:id', imagesController.editImages);
router.get('/images/product/:id', imagesController.getProductsImages); //melhor em product controller futuramente
router.get('/images/:id', imagesController.getImage);

//price
router.put('/prices/:id', priceController.editPrice);



module.exports = router;