let express = require('express');
let router = express.Router();
let clientController = require('./app/client/clientController');

//clients
router.get('/clients', clientController.listClients);
router.get('/clients/:id', clientController.getClient);
router.post('/clients', clientController.createClient);
router.put('/clients/:id', clientController.editClient);
router.put('/clients/delete/:id', clientController.deleteClient);

module.exports = router;