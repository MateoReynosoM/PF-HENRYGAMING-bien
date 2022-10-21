const Router = require("express");
const { where } = require("sequelize");
const { FavoritesProduct } = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/deleteFavProduct?id=1

const deleteFavProduct = Router();

deleteFavProduct.delete("/", verifyToken, async (req, res, next) => {
  const { id } = req.query;

  try {
    let productDestroy = await FavoritesProduct.destroy({
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

module.exports = deleteFavProduct;
