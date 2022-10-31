const Router = require("express");
const { where } = require("sequelize");
const { FavoritesProduct, Favorites, Product, Brand  } = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

//ejemplo de ruta http://localhost:3001/getFavorites

const getFavorites = Router();

getFavorites.get("/", verifyToken, async (req, res, next) => {
  const tokennn = req.headers["x-access-token"];
  const decoded = jwt.verify(tokennn, process.env.SECRET);
  req.userId = decoded.id;
  var userId = req.userId;

  try {
    let favItems = await FavoritesProduct.findAll({
      where: {
        favoriteId: userId,
      },
      include: {
        model: Product,
        include: { model: Brand },
      },
    });
    let favTotal = await Favorites.findByPk(userId);

    if (favItems) return res.send({ favTotal, favItems: [...favItems] });
    return res.status(404).send("No products found in favorites");
  } catch (error) {
    next(error);
  }
});

module.exports = getFavorites;
