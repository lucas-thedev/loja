const bcrypt = require('bcrypt');
const client = require('../client/clientHelper');

let login = {
    loginUser (req, res) {
        let body = req.body;
        auth(body.user, body.password).then((res) =>{
            console.log(res)
        })
    }
}

function auth (user, password) {
    return new Promise((resolve) => {
        getClient(user).then((res) => {
            bcrypt.compare(password, res[0].password, function (err, result) {
                if (result == true) {
                    //go

                } else {
                    // dont go
                }
            });
        });
    })
}

function getClient(user) {
    return new Promise((resolve) => {
        client.getClient(user).then((res) => {
            resolve(res);
        });
    });
}

module.exports = login;