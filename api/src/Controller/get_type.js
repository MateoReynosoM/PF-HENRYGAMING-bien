const Router = require("express");
const { Product } = require("../db");

const getType = Router();

getType.get("/", async (req, res, next) => {
  const { type } = req.query;

  if (!type)
    return res.status(404).json({ message: "No se econtro ese Type." });

  try {
    let products = await Product.findAll();
    let productsType = products.filter((el) =>
      el.type.toLowerCase().includes(type.toLowerCase())
    );

    return productsType.length
      ? res.status(200).send(productsType)
      : res.status(404).send("No se recibio un type correcto");
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = getType;
