const categoryHelper = require('./categoryHelper');

let categoryController = {

    listCategory (req, res) {
        categoryHelper.listCategory()
            .then((response) =>{
                return  res.json(response);
        });
    },

    getCategory(req, res) {

        let id = req.params.id;

        categoryHelper.getCategory(id)
        .then((response) =>{
            if (response.error) {
                res.status(503);
            }
            return res.json(response);
        });
    },

    createCategory (req, res) {
        let body = req.body;
        categoryHelper.createCategory(body)
        .then((response) =>{
            if (response.error) {
                res.status(503);
            }
            return res.json(response);
        });
    },

    editCategory (req, res) {

        let body = req.body;
        let id = req.params.id;

        categoryHelper.editCategory(body, id)
        .then((response) =>{
            if (response.error) {
                res.status(503);
            }
            return res.json(response);
        });
    },

    deleteCategory (req, res) {

        let id = req.params.id;

        categoryHelper.deleteCategory(id)
        .then((response) =>{
            if (response.error) {
                res.status(503);
            }
            return res.json(response);
        });
    }



}

module.exports = categoryController;