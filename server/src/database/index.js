const config = require("../config");
const DBconfig = config.db;
const mysql = require("mysql2");
const {Users} = require("../models/Users");
const {Projects} = require("../models/Projects");
const {Images} = require("../models/Images");
const {createTable}= require("../service/model.service");

const connection = mysql.createConnection({
    host: DBconfig.host,
    user: DBconfig.user,
    password: DBconfig.password,
    database: DBconfig.database,
});

const getDB = () => connection;

createTable(getDB, "users", Users);
createTable(getDB, "images", Images);
createTable(getDB, "projects", Projects );


module.exports = getDB;


