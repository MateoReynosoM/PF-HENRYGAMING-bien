const Router = require('express');
const {UserAdress} = require('../../db');
const {verifyToken} = require('../Utils/jwt_middlewares');
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

//ruta user
// http://localhost:3001/allAddresses
const getAllAddress = Router();


getAllAddress.get('/', verifyToken,async (req, res, next)=>{
    const tokennn = req.headers["x-access-token"];
    const decoded = jwt.verify(tokennn, SECRET);
    req.userId = decoded.id;
    var userId = req.userId;

    try {
        console.log(userId)
           const addresses =await UserAdress.findAll({
                where:{
                    userId: userId
                }
            });

            if(addresses.length) return res.send(addresses);
            else return res.status(404).json({message: 'No tiene direcciones registradas'});     

    } catch (error) {
        console.log(error)
        next()
    }

});

module.exports= getAllAddress;