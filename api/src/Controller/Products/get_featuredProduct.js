const Router = require("express");
const { Product } = require("../../db");

const getFeaturedProduct = Router();

//ejemplo de ruta: http://localhost:3001/featuredProduct

getFeaturedProduct.get("/", async (req, res, next) => {
  let products = await Product.findAll({
    attributes: [
      "id",
      "img",
      "type",
      "model",
      "price",
      "detail",
      "brandId",
      "categoryId",
    ],
  });
  let a = [];
  let featuredProducts = [];
  do {
    let x = Math.floor(Math.random() * products.length);
    if (a.map((e) => e !== x)) {
      a.push(x);
      featuredProducts.push(await Product.findByPk(x));
    }
  } while (a.length < 10);

  try {
    return featuredProducts.length > 1
      ? res.status(200).send(featuredProducts)
      : res.status(404).send("No se recibio un brand correcto");
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = getFeaturedProduct;
