const router = require("express").Router();
const projectsController = require("../controllers/projects.controller");

router
.route("/")
.get(projectsController.getAll)
.post(projectsController.create);

router
.route("/:category")
.get(projectsController.getAllByName);

router
.route("/:id")
.put(projectsController.updateOne)
.delete(projectsController.delete);

module.exports = router;