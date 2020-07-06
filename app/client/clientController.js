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
        let body = ["09980100648", "rachel", "bay", "10", "24500235", "arcadia bay", "oregon", "eua", "aaa@aaa.com", "123456", "5550123", "active", "2016-12-01 12:32:00.000", null];
        clientHelper.createClient(body)
            .then((response) =>{
                return  res.json(response);
        });
    },

    editClient (req, res) {

        let body = {
            name: "max",
            email: "email@example.com"
        }

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