const Router = require('express');
const {UserAdress} = require('../../db');
const {verifyToken} = require('../Utils/jwt_middlewares');
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

//ruta user
// http://localhost:3001/allAddresses
const getAllAdress = Router();


getAllAdress.get('/', verifyToken,async (req, res, next)=>{
    const tokennn = req.headers["x-access-token"];
    const decoded = jwt.verify(tokennn, process.env.SECRET);
    req.userId = decoded.id;
    var userId = req.userId;

    try {
        
           const addresses =await UserAdress.findAll({
                where:{
                    userId: userId
                }
            });

            if(addresses.length) return res.send(addresses);
            else return res.status(200).json({message: 'No tiene direcciones registradas'});     

    } catch (error) {
        
        next()
    }

});

module.exports= getAllAdress;