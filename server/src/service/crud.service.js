const runQuery = require("../database/runQery");
const { Queries } = require("../database/Queries");


async function findAll({tableName, ReftableName ,SELECT,myTableKey, refTableKey}) {

    if(!ReftableName){
        let query = Queries.command_findAll
        .replace("<table_name>", tableName);
        return runQuery(query);
    }

    let query = Queries.command_findAll_InnerJoin
    .replace("<key_value>", SELECT || "*")
    .replace("<mytable_name>", tableName)
    .replace("<ref_table_name>", ReftableName)
    .replace("<mytable_name_dot_key>", myTableKey)
    .replace("<ref_table_name_dot_key>", refTableKey);
    return runQuery(query);
   
}

async function findByName(tableName, keyName, categoryName) {
    let query = Queries.command_findByName
    .replace("<table_name>", tableName)
    .replace("<by_key>", keyName)
    .replace("<given_category>", categoryName);
    return runQuery(query);
}


async function createOne(tableName, keys, values) {

    let result = "";
    for (let i = 0; i < values.length; i++) {
      result += "?,";
    }
    
    return runQuery(Queries.command_create
        .replace("<table_name>", tableName) 
        .replace("<key_value>", keys)
        .replace("<question_mark>", result.slice(0, -1))
        , ...values);
}

async function deleteOneById(tableName, id) {
    return runQuery(Queries.command_delete
        .replace("<table_name>", tableName), id);
}


async function updateOneById(tableName,id, options = {}) {
    const query = Queries.command_update
    .replace("<table_name>", tableName)
    .replace("<key_value>", Object.keys(options).map((key) =>
    `${key}= ?`));
    const valuesToUpDate = Object.values(options);
    valuesToUpDate.push(+id || id)
    try {
        const res = await runQuery(query, ...valuesToUpDate);
        return res;
    } catch (error) {
        throw error
    }
}


module.exports = { findAll, findByName, createOne, deleteOneById, updateOneById};
