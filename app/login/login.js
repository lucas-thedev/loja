const bcrypt = require('bcrypt');
const client = require('../client/clientHelper');

let login = {
    loginUser (req, res) {
        let body = req.body;
        auth(body.user, body.password).then((response) =>{
            if (response === 'not found') {
                res.status(404);
            }
            return res.json({authenticated: response});        
        })
    }
}

function auth (user, password) {
    return new Promise((resolve) => {
        getClient(user).then((res) => {
            if (res === 'not found') {
                resolve('not found');
            }
            bcrypt.compare(password, res[0].password, function (err, result) {
                if (result == true) {
                    resolve(res[0].id);
                } else {
                    resolve('not found');
                }
            });
        });
    })
}

function getClient(user) {
    return new Promise((resolve) => {
        client.getClient(user).then((res) => {
            if (res.length === 0) {
                resolve('not found');
            }
            resolve(res);
        });
    });
}

module.exports = login;