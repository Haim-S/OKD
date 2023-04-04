require("dotenv/config");
const app = require("./app/app");
const config = require("./config");






app.listen(config.port, ()=> console.log(`run on port ${config.port}`));


