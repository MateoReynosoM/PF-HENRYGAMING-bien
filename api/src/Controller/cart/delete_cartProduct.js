const Router = require("express");
const { where } = require("sequelize");
const { CartProduct, Product, Cart } = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/deleteCartProduct?id=1

const deleteCartProduct = Router();

deleteCartProduct.delete("/", verifyToken, async (req, res, next) => {
  const { id } = req.query;

  try {
    let productDestroy = await CartProduct.findByPk(id);
    let product = await Product.findByPk(productDestroy.productId)
    let cart = await Cart.findByPk(productDestroy.cartId)
    let discount = (product.price * productDestroy.amount)
    cart.update({
      total: (cart.total - discount)
    })
    

    if (productDestroy) return res.send("Product deleted successfully");
    return res.status(404).send("Product not found");
  } catch (error) {
    next(error);
  }
});

module.exports = deleteCartProduct;
