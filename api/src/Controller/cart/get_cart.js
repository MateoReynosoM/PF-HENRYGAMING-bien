const Router = require("express");
const { where } = require("sequelize");
const { CartProduct, Cart } = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/?cartId=1

const getCart = Router();

getCart.get("/", verifyToken, async (req, res, next) => {
  const { cartId } = req.query;

  try {
    let cartItems = await CartProduct.findAll({
      where: {
        cartId: cartId,
      },
    });
    let CartTotal = await Cart.findByPk(cartId);

    if (cartItems) return res.send([CartTotal, ...cartItems]);
    return res.status(404).send("No products found in cart");
  } catch (error) {
    next(error);
  }
});

module.exports = getCart;
