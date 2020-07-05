let sql = require('../../database/queries');

let clientRepository = {
    listClients() {
        return new Promise((resolve) => {
            let queryCommand = 'SELECT * FROM mydb.client WHERE deleted_at IS NULL;'
            sql.query(queryCommand).then((response) => {
                resolve(response);
            });
        })
    },

    createClient() {
        /*INSERT INTO client (CPF, name, street, houseNumber, zipCode, city, state, country, email, password, phone, status, created_at, deleted_at)
        VALUES ("09980100686", "rachel", "bay", 10, "24500235", "arcadia bay", "oregon", "eua", "aaa@aaa.com", "123456", "5550123", "active", "2016-12-01 12:32:00.000", "2016-12-01 12:32:00.000");*/
        return ['client1', 'client2'];
    },

    editClient() {
        return ['client1', 'client2'];
    },

    deleteClients() {
        return ['client1', 'client2'];
    }

}

module.exports = clientRepository;