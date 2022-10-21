const Router = require("express");
const { where } = require("sequelize");
const { Cart } = require("../../db");
const { verifyToken } = require("./../jwt_middlewares");

//ejemplo de ruta http://localhost:3001/deleteCart?cartId=1

const deleteCart = Router();

deleteCart.delete("/",verifyToken, async (req, res, next) => {
  const { cartId } = req.query;

  try {
    let cartDestroy = await Cart.destroy({
      where: {
        id: cartId,
      },
    });

    if (cartDestroy) return res.send("cart deleted successfully");
    return res.status(404).send("Cart not found");
  } catch (error) {
    next(error);
  }
});

module.exports = deleteCart;