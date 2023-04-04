const router = require("express").Router();

const userRoutes = require("./users.routes");
const imagesRoutes = require("./images.routes");
const projectsRoutes = require("./projects.routes");


router.use("/users", userRoutes);
router.use("/images", imagesRoutes);
router.use("/projects", projectsRoutes);

module.exports = router;
