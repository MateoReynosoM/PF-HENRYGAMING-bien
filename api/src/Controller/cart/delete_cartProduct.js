const Router = require("express");
const { where } = require("sequelize");
const { CartProduct } = require("../../db");
const { verifyToken } = require("./../jwt_middlewares");

//ejemplo de ruta http://localhost:3001/deleteCartProduct?id=1

const deleteCartProduct = Router();

deleteCartProduct.delete("/",verifyToken, async (req, res, next) => {
  const { id } = req.query;

  try {
    let productDestroy = await CartProduct.destroy({
      where: {
        id: id,
      },
    });

    if (productDestroy) return res.send("Product deleted successfully");
    return res.status(404).send("Product not found");
  } catch (error) {
    next(error);
  }
});

module.exports = deleteCartProduct;
