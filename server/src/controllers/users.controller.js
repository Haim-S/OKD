const CRUD = require("../service/crud.service");


exports.getAll = async(req, res)=>{
    const options = {
        tableName: "users",
    }

try {
    const data = await CRUD.findAll(options);
    res.status(200).send(data);
} catch (error) {
    console.log(error);
  res.status(500).send(error);  
}
};

exports.create = async(req, res)=>{
    try {
        const tableName = "users";
        const new_data = await CRUD.createOne(tableName,Object.keys(req.body),Object.values(req.body));
        res.status(201).send(new_data); 
    } catch (error) {
        res.status(500).send(error);
        
    }
}

exports.delete = async(req, res)=>{
    try {
        const tableName = "users";
        const deleteOne = await CRUD.deleteOneById(tableName, ...req.params.id);
        if(!deleteOne.affectedRows) return res.status(400).json({error: "No item deleted"})
        res.status(201).send(deleteOne);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.updateOne = async (req, res) => {
    try {
        const tableName = "users";
      const result =  await CRUD.updateOneById(tableName, req.params.id, req.body);
      res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
