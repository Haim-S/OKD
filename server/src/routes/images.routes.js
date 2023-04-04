const router = require("express").Router();
const imagesController = require("../controllers/images.controller");

router
.route("/")
.get(imagesController.getAll)
.post(imagesController.create);

router
.route("/:category")
.get(imagesController.getAllByName);

router
.route("/:id")
.put(imagesController.updateOne)
.delete(imagesController.delete);

module.exports = router;