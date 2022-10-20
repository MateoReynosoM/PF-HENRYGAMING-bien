const Router = require("express");
const { where } = require("sequelize");
const { CartProduct } = require("../../db");

//ejemplo de ruta http://localhost:3001/deleteCartProduct?id=1

const deleteCartProduct = Router();

deleteCartProduct.delete("/", async (req, res, next) => {
  const { id } = req.query;

  try {
    let productDestroy = await CartProduct.destroy({
      where: {
        id: id,
      },
    });

    if (productDestroy) return res.send("Producto borrado correctamente");
    return res.status(404).send("No se encuentra ese producto");
  } catch (error) {
    next(error);
  }
});

module.exports = deleteCartProduct;
