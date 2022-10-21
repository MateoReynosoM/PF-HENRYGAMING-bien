const Router = require("express");
const { where } = require("sequelize");
const { Cart } = require("../../db");
const { verifyToken } = require("./../jwt_middlewares");

//ejemplo de ruta http://localhost:3001/deleteCartProduct?id=1

const deleteCart = Router();

deleteCart.delete("/",verifyToken, async (req, res, next) => {
  const { userId } = req.query;

  try {
    let cartDestroy = await Cart.destroy({
      where: {
        id: userId,
      },
    });

    if (cartDestroy) return res.send("successfully deleted cart");
    return res.status(404).send("Cart not found");
  } catch (error) {
    next(error);
  }
});

module.exports = deleteCart;