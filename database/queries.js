let connection = require('./connection');

let sql = connection.createConnection();

let command = {
    query (qry) {
        return new Promise((resolve, reject) => {
            sql.query(qry, function(error, results, fields){

                let res = results;
    
                if(error) {
                     console.log(error);
                     reject();
                } else {
                    resolve(res);
                }
            });
        })
    }
}

module.exports = command;