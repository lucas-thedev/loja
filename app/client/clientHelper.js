let clientRepository = require('./clientRepository');

let clientHelper = {

    listClients () {
        return new Promise((resolve) => {
            clientRepository.listClients()
            .then((response) =>{
                resolve(response);
            }); 
        })
    },

    createClient () {
        return clientRepository.createClient(); 
    },

    editClient () {
        return clientRepository.editClient(); 
    },

    deteleClient () {
        return clientRepository.deteleClient(); 
    }

}

module.exports = clientHelper;