let express = require('express');
let router = express.Router();
let clientController = require('./app/client/clientController');

//clients
router.get('/clients', clientController.listClients);
router.post('/clients', clientController.createClient);
router.put('/clients', clientController.editClient);
router.delete('/clients', clientController.deleteClient);

module.exports = router;