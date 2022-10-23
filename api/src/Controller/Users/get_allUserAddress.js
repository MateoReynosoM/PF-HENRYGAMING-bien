
const Router = require('express');
const {UserAdress} = require('../../db');
const {verifyToken} = require('../Utils/jwt_middlewares');


//ruta user
// http://localhost:3001/allAddresses?userId=1
const getAllAddress = Router();


getAllAddress.get('/', verifyToken,async (req, res, next)=>{
 const {userId} = req.query;
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