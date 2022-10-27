const Router = require("express");
const { Sequelize } = require("sequelize");
const { User, Product, Favorites, FavoritesProduct } = require("../../db");
const { Op } = require("sequelize");
const { verifyToken } = require("../Utils/jwt_middlewares");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const postFavorite = Router();

postFavorite.post("/", verifyToken, async (req, res, next) => {
  const tokennn = req.headers["x-access-token"];
  const decoded = jwt.verify(tokennn, SECRET);
  req.userId = decoded.id;
  var userId = req.userId;
  const { idProduct } = req.query;

  // const user = await User.findByPk(userId);

  // const product = await Product.findByPk(idProduct);

  const [favorites, createdfavorites] = await Favorites.findOrCreate({
    where: {
      userId: userId,
    },
  });

  const [favoritesProduct, createdfavoritesProduct] =
    await FavoritesProduct.findOrCreate({
      include: [{ model: Product }, { model: Favorites }],
      where: {
        [Op.and]: [{ productId: idProduct }, { favoriteId: favorites.id }],
      },
      defaults: {
        favoriteId: favorites.id,
        productId: idProduct,
      },
    });

  const result = await Favorites.findAll({
    where: {
      userId: userId,
    },
    include: {
      model: FavoritesProduct,
      include: {
        model: Product,
      },
    },
  });

  try {
    if (!userId && !idProduct)
      return res.send({ message: "No se enviaron los datos correctos" });

    return res.send(
      { message: "Se agrego un producto a favoritos" }
    );
  } catch (error) {
    console.error(error);
  }
});

module.exports = postFavorite;
