const Router = require("express");
const { where } = require("sequelize");
const { CartProduct } = require("../../db");
const { verifyToken } = require("../jwt_middlewares");

//ejemplo de ruta http://localhost:3001/?cartId=1

const getCart = Router();

getCart.get("/",verifyToken, async (req, res, next) => {
  const { cartId } = req.query;

  try {
    let cartItems = await CartProduct.findAll({
      where: {
        cartId: cartId,
      },
    });

    if (cartItems) return res.send(cartItems);
    return res.status(404).send("No se encuentran Items en el cart");
  } catch (error) {
    next(error);
  }
});

module.exports = getCart;
