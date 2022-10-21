const Router = require("express");
const { where } = require("sequelize");
const { Favorites } = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/deleteAllFavs?favoriteId=1

const deleteAllFavs = Router();

deleteAllFavs.delete("/", verifyToken, async (req, res, next) => {
  const { favoriteId } = req.query;

  try {
    let favDestroy = await Favorites.destroy({
      where: {
        id: favoriteId,
      },
    });

    if (favDestroy) return res.send("Favorites deleted successfully");
    return res.status(404).send("Cart not found");
  } catch (error) {
    next(error);
  }
});

module.exports = deleteAllFavs;
