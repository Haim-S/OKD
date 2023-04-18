const CRUD = require("../service/crud.service");
const bcrypt = require("bcrypt");
const JwtTokenService = require("../service/jwt.service");


exports.login = async (req, res, next) => {
    try {
        // console.log(req.body);
        const {email, password} = req.body;
        const user = await CRUD.findByName("users", "email", email);
        // console.log(user);
        if(!user.length) return res.status(400).send("user not found");
        let pp = Object.values(user).map((data) => data.password);
        const isPasswordMatch = await bcrypt.compare(password, pp[0]);
        if(!isPasswordMatch) return res.status(400).send("error password");
        let id = Object.values(user).map((data) => data.id);
        const options = {"jwt_ac_token" : JwtTokenService.createAccessToken(id)};
        await CRUD.updateOneById("users",id[0], options);
        const user_login = await CRUD.findByName("users", "email", email);
        console.log(user_login);
        res.status(200).send(user_login);
    } catch (error) {
        res.status(400).send(error);
    }
  
}

exports.logout = async (req, res) => {
    try {
        const {token} = req.body;
        const user = await CRUD.findByName("users", "jwt_ac_token", token);
        let id = Object.values(user).map((data) => data.id);
        if(id[0] === undefined) return res.send("user not found, or already disconnected")
        const options = {"jwt_ac_token" : undefined};
       const updateToken = await CRUD.updateOneById("users",id[0], options);
       if(updateToken){
           res.send({ok: true, message: "You have been logged out"});
       }
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.isLogin = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
} 

