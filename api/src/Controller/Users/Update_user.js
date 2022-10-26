const Router = require('express');
const { User } = require('../../db');

const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { verifyToken } = require("../Utils/jwt_middlewares");



updateUser = Router();

updateUser.put('/', verifyToken, async (req, res, next)=>{
    
    const tokennn = req.headers["x-access-token"];
    const decoded = jwt.verify(tokennn, SECRET);
    req.userId = decoded.id;
    var userId = req.userId;

    const {
        img,
        userName,
        firstName,
        lastName,
        email,
    } = req.body;

    try {
        
        let user = await User.findByPk(userId)

        if(user) {

        const existentEmail = await User.findOne({where:{email:email}})
    
        const existentUserName = await User.findOne({where:{userName:userName}})
    
        if(existentEmail && existentUserName){
            res.status(404).send("Username and email already in use")
        }else if(existentEmail && !existentUserName){
            res.status(404).send("Email already in use")
        }else if(!existentEmail && existentUserName){
            res.status(404).send("Username already in use")
        }

            await user.update({
                img: img? img : user.img,
                userName: userName? userName: user.userName,
                firstName: firstName ? firstName: user.firstName,
                lastName: lastName ? lastName: user.lastName,
                email: email? email: user.email,
            })
            await user.save()
        
            return res.send({message: 'Se actualizo correctamente.'})
        }else{
            res.status(404).json({message: 'El user no existe.'})
        }
    } catch (error) {
        console.error(error)
        next()
    }
});

module.exports = updateUser;