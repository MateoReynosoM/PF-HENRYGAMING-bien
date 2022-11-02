const Router = require("express");
const { User } = require("../../db");
const { verifyToken, isAdmin } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/deleteUserPermanently?userId=2

const deleteUserPermanently = Router();

deleteUserPermanently.delete("/", [verifyToken,isAdmin], async (req, res, next) => {
  const { userId } = req.query;
  

  try {
    const user = await User.findOne({ where: { id: userId } });
    
    if (user) {
      
        await user.destroy({ force: true })
        
        res.status(200).json({ msg: "user deleted", data: user });
        }
        else{
          return res.status(404).send("No se encuentra ese userId");
        }
    
    
  } catch (error) {
    next(error);
  }
});

module.exports = deleteUserPermanently;