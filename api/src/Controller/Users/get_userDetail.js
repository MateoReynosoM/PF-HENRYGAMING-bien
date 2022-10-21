const Router = require("express");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { CartProduct, Cart, User } = require("../../db");
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
        attributes:["id","userName","firstName","lastName","email"] 
    })
    if(!user)return res.status(404).json({ mesagge: "User not found" });



    try {
    let CartTotal = await Cart.findOne({
        where:{userId:user.id}        
        });
    if(!CartTotal)return res.status(404).json({ mesagge: "User does not have a cart" });
    let cartItems = await CartProduct.findAll({
      where: {
        cartId: CartTotal.id,
      },
    });
    if(!cartItems)return res.status(404).send("No products found in cart");
    if (cartItems) return res.status(200).json([user,CartTotal, ...cartItems]);
    
  } catch (error) {
    next(error);
  }
});

module.exports = getUserDetail;