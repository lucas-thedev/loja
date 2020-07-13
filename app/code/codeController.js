const codeHelper = require('./codeHelper');

let codeController = {

    editCode(req, res) {

        let id = req.params.id;
        let body = req.body;

        codeHelper.editCode(body, id)
            .then((response) =>{
                if (response.error) {
                    res.status(403);
                }
                return res.json(response);
        });
    },
}

module.exports = codeController;