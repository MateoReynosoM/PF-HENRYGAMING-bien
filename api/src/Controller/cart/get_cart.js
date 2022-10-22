const Router = require("express");
const { where } = require("sequelize");
const { CartProduct, Cart } = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

//ejemplo de ruta http://localhost:3001/

const getCart = Router();

getCart.get("/", verifyToken, async (req, res, next) => {
  const tokennn = req.headers["x-access-token"];
  const decoded = jwt.verify(tokennn, SECRET);
    req.userId = decoded.id;
    var userId = req.userId;
  let cartUser= await Cart.findOne({
    where:{
      userId:userId
    },
    include:{
      model:CartProduct
    }
  })

  try {
    console.log(cartUser)

    if (cartUser) return res.send(cartUser);
    return res.status(404).send("No products found in cart");
  } catch (error) {
    next(error);
  }
});

module.exports = getCart;
