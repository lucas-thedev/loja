let clientHelper = require('./clientHelper');

let clientController = {

    listClients (req, res) {
        clientHelper.listClients()
            .then((response) =>{
                return  res.json(response);
        });
    },

    getClient(req, res) {

        let id = req.params.id;

        clientHelper.getClient(id)
            .then((response) =>{
                return  res.json(response);
        });
    },

    createClient (req, res) {
        let body = req.body;
        clientHelper.createClient(body)
            .then((response) =>{
                return  res.json(response);
        });
    },

    editClient (req, res) {

        let body = req.body;
        let id = req.params.id;

        clientHelper.editClient(body, id)
            .then((response) => {
                return res.json(response);
            });
    },

    deleteClient (req, res) {

        let id = req.params.id;

        clientHelper.deleteClient(id)
            .then((response) => {
                return res.json(response);
            });
    }



}

module.exports = clientController;