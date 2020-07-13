const imagesHelper = require('./imagesHelper');

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
}

module.exports = imagesController;