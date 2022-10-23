const Router = require("express");
const { where } = require("sequelize");
const { FavoritesProduct, Favorites } = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/?favoriteId=1

const getFavorites = Router();

getFavorites.get("/", verifyToken, async (req, res, next) => {
  const { favoriteId } = req.query;

  try {
    let favItems = await FavoritesProduct.findAll({
      where: {
        favoriteId: favoriteId,
      },
    });
    let favTotal = await Favorites.findByPk(favoriteId);

    if (favItems) return res.send([favTotal, ...favItems]);
    return res.status(404).send("No products found in favorites");
  } catch (error) {
    next(error);
  }
});

module.exports = getFavorites;
