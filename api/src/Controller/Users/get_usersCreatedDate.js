const Router = require('express');
const {User} = require('../../db');
const {verifyToken, isAdmin} = require('../Utils/jwt_middlewares');



//ruta user
// http://localhost:3001/usersCreatedDate
const usersCreatedDate = Router();


usersCreatedDate.get('/', [verifyToken,isAdmin] ,async (req, res, next)=>{

    try {
        
           const userCreatedDate =await User.findAll({
                attributes:["id","createdAt"]
            });

            if(userCreatedDate) return res.send(userCreatedDate);
            else return res.status(200).json({message: 'No hay usuarios'});     

    } catch (error) {
        
        next()
    }

});

module.exports= usersCreatedDate;