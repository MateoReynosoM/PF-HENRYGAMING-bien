const Router = require("express");
const { User } = require("../../db");
const { verifyToken, isAdmin } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/banUser?userId=2

const banUser = Router();

banUser.delete("/", [verifyToken,isAdmin], async (req, res, next) => {
  const { userId } = req.query;
  

  try {
    let userDeleted = await User.findOne({ where: { id: userId },paranoid:false });
    
    if (userDeleted) {
      
        
        
        await userDeleted.restore()
   
        res.status(200).json({ msg: "user unbaned", data: userDeleted });
        }else{
          return res.status(404).send("No se encuentra ese userId");
        } 
    
  } catch (error) {
    next(error);
  }
});

module.exports = banUser;