const router = require("express").Router();
const usersController = require("../controllers/users.controller");

router
.route("/")
.get(usersController.getAll)
.post(usersController.create);

router
.route("/:id")
.put(usersController.updateOne)
.delete(usersController.delete);


module.exports = router;
