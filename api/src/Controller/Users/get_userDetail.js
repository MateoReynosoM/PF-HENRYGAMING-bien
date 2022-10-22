const Router = require("express");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { CartProduct, Cart, User, UserAdress } = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/getUserDetail

const getUserDetail = Router();

getUserDetail.get("/", verifyToken, async (req, res, next) => {
  const tokennn = req.headers["x-access-token"];
  const decoded = jwt.verify(tokennn, SECRET);
    req.userId = decoded.id;
    var userId = req.userId;
    console.log(userId);

    const user = await User.findOne({
        where:
        { id: userId },
        attributes:["id","userName","firstName","lastName","email"],
        include:[{
            model:Cart,
            include:{
                model:CartProduct
            }
        },{model:UserAdress}]
    })
    if(!user)return res.status(404).json({ mesagge: "User not found" });



    try {
        
        const adressUser = await UserAdress.findAll({
            where:{
                id:userId
            }
        })
        const user = await User.findOne({
            where:
            { id: userId },
            attributes:["id","userName","firstName","lastName","email"],
            include:[
                {model:Cart,
                include:{
                    model:CartProduct
                }},{model:UserAdress}]
            ,
        })

        if(!user)return res.status(404).json({ mesagge: "User not found" });
    
    return res.status(200).json([user]);
    
  } catch (error) {
    next(error);
  }
});

module.exports = getUserDetail;