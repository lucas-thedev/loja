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
const productController = require('./app/product/productController');
const categoryController = require('./app/category/categoryController');
const orderController = require('./app/order/orderController');
const saleController = require('./app/sale/saleController');
const login = require('./app/login/login');
// ROUTES ===================================================================================================

//products
router.post('/products', productController.createProduct);
router.get('/products', productController.listProducts);
router.get('/products/:id', productController.getProduct);
router.put('/products/:id', productController.updateProduct);
router.put('/products/delete/:id', productController.deleteProduct);

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
router.get('/images/product/:id', imagesController.getProductsImages);
router.get('/images/:id', imagesController.getImage);

//price
router.put('/prices/:id', priceController.editPrice);

//category
router.get('/category', categoryController.listCategory);
router.get('/category/:id', categoryController.getCategory);
router.post('/category', categoryController.createCategory);
router.put('/category/:id', categoryController.editCategory);
router.put('/category/delete/:id', categoryController.deleteCategory);

//order
router.get('/order', orderController.listOrders);
router.get('/order/client/:id', orderController.listOrdersByClient);
router.post('/order', orderController.createOrder);

//sale
router.post('/sale', saleController.createSale);
router.get('/sale', saleController.listSales);

//login
router.post('/auth', login.loginUser);


module.exports = router;