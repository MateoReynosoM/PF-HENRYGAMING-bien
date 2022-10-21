const Router = require("express");
const { Sequelize } = require("sequelize");
const { User, Product, Favorites, FavoritesProduct } = require("../../db");
const { Op } = require("Sequelize");
const { verifyToken } = require("../Utils/jwt_middlewares");

const postFavorite = Router();

/*
    post recibe por body = {
        idUser: id de usuario actual
        idproduct: id del producto seleccionado
        amount: (opcion) cantidada de productos que ingresan al carro,
         se deberia multiplicar el precio 
    }
    carga de a uno o varios articulos del mismo tipo y distino, actualiza el total de cart
    aparte debe haber una ruta delete

 ver de optimizar:
*/
//ejemplo de ruta: http://localhost:3001/postFavorite
/* {
  "idUser":4,
  "idProduct":6
} */

postFavorite.post("/", verifyToken, async (req, res, next) => {
  const { idUser, idProduct } = req.body;
  if (!idUser && !idProduct)
    return res.send({ message: "No se enviaron los datos correctos" });
  try {
    const user = await User.findByPk(idUser);

    const product = await Product.findByPk(idProduct);

    const [favorites, createdFav] = await Favorites.findOrCreate({
      where: {
        userId: idUser,
      },
      defaults: {
        name: product.idProduct,
      },
    });

    const [favoritesProduct, createdFavProduct] =
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

    // if (!createdFav && !createdFavProduct) {
    //   //update en el caso de que no sea el primer producto
    //   await favorites.save();
    //   await favoritesProduct.save();
    //   return res.send({ message: "Se agrego un producto similar" });
    // }
    // if (!createdFav && createdFavProduct) {
    //   await favorites.save();
    //   return res.send({ message: "Se agrego un producto diferente" });
    // }
    // if (favorites && createdFav) {
    //   await user.createCart(favorites);
    // }
    if (
      user &&
      product &&
      favorites &&
      favoritesProduct &&
      createdFav &&
      createdFavProduct
    ) {
      await favorites.addFavProduct(favoritesProduct);
      await product.createFavProduct(favoritesProduct);
    }

    return res.send({ message: "Se agrego un producto a favoritos" });
  } catch (error) {
    console.error(error);
  }
});

module.exports = postFavorite;
