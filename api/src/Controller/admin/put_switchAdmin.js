const Router = require('express');
const { User } = require('../../db');
const { verifyToken, isAdmin } = require("../Utils/jwt_middlewares");

//ejemplo de ruta: http://localhost:3001/switchAdmin?userId=2

const switchAdmin = Router();

switchAdmin.put('/', [verifyToken, isAdmin], async (req, res, next)=>{
    const {userId} = req.query
    

    try {
        
        let user = await User.findByPk(userId)

        if(user.adminPrivileges===true) {

            await user.update({
                adminPrivileges:false
            })
            await user.save()
        
            return res.send({message: 'Se actualizo correctamente.'})
        }
        if(user.adminPrivileges===false) {

            await user.update({
                adminPrivileges:true
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

module.exports = switchAdmin;