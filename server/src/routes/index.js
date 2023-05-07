const router = require("express").Router();

const authRoutes = require("./authentication.routes");
const userRoutes = require("./users.routes");
const imagesRoutes = require("./images.routes");
const projectsRoutes = require("./projects.routes");
const emailRoutes = require("./email.routes");


router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/images", imagesRoutes);
router.use("/projects", projectsRoutes);
router.use("/email", emailRoutes);

module.exports = router;
