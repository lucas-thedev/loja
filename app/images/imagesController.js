const imagesHelper = require('./imagesHelper');
const path = require('path');


let imagesController = {

    createThumbnail(req, res) {

        let images = req.file;
        let productId = req.body;

        imagesHelper.createThumbnail(images, productId)
            .then((response) =>{
                if (response.error) {
                    res.status(403);
                }
                return res.json(response);
        });
    },
    
    createImages(req, res) {

        let images = req.files;
        let productId = req.body;

        imagesHelper.createImages(images, productId)
            .then((response) =>{
                if (response.error) {
                    res.status(403);
                }
                return res.json(response);
        });
    },

    editImages(req, res) {

        let id = req.params.id;
        let config = req.body;

        imagesHelper.editImages(id, config)
            .then((response) =>{
                if (response.error) {
                    res.status(403);
                }
                return res.json(response);
        });
    },

    editImages(req, res) {

        let id = req.params.id;
        let config = req.body;

        imagesHelper.editImages(id, config)
            .then((response) =>{
                if (response.error) {
                    res.status(403);
                }
                return res.json(response);
        });
    },

    getProductsImages(req, res) {

        let id = req.params.id;

        imagesHelper.getProductsImages(id)
            .then((response) =>{
                if (response.error) {
                    res.status(403);
                }                 
            return res.json(response);
        });
    },

    getImage(req, res) {

        let id = req.params.id;

        imagesHelper.getImage(id)
            .then((response) =>{
                if (response.error) {
                    res.status(403);
                }  
            return res.sendFile(path.join(__dirname, '../../', response[0].path));
        });
    }
}

module.exports = imagesController;