const fs = require("fs");
const path = require("path");

const IMAGES_JSON_DB = fs.readFileSync(path.join(__dirname, "DATA_IMAGES.json"));
const PROJECTS_JSON_DB = fs.readFileSync(path.join(__dirname, "DATA_PROJECTS.json"));
const DB_IMAGES = JSON.parse(IMAGES_JSON_DB);
const DB_PROJECTS = JSON.parse(PROJECTS_JSON_DB);

module.exports = {DB_IMAGES, DB_PROJECTS};