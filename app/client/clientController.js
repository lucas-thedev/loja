let clientHelper = require('./clientHelper');

let clientController = {

    listClients (req, res) {
        clientHelper.listClients()
            .then((response) =>{
                return  res.json(response);
        });
    },

    createClient (req, res) {
        let response = clientHelper.createClient();
        return  res.json(response);
    },

    editClient (req, res) {
        let response = clientHelper.editClient();
        return  res.json(response);
    },

    deleteClient (req, res) {
        let response = clientHelper.deleteClient();
        return  res.json(response);
    }



}

module.exports = clientController;