const router = require("express").Router();
const authController = require("../controllers/authentication.controllers");

router.post("/login", authController.login);
router.delete("/logout", authController.logout);


module.exports = router;