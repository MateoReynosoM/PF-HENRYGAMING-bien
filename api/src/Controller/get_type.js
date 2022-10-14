const Router = require("express");
const { Product } = require("../db");

const getType = Router();

getType.get("/", async (req, res, next) => {
  const { id } = req.query;

  if (!id)
    return res.status(404).json({ message: "No se econtro ese Type." });

  try {
    let products = await Product.findAll({
      attributes: ["id", "img", "type", "model", "price", "detail", "brandId", "categoryId"]
    });
    let productsType = products.filter((el) => el.categoryId==id );

    return productsType.length
      ? res.status(200).send(productsType)
      : res.status(404).send("No se recibio un id correcto");
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = getType;
