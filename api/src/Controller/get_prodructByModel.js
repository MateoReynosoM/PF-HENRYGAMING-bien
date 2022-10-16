const Router = require("express");
const { Product } = require("../db");


//ejemplo: http://localhost:3001/productModel?name=ryzen


const getProductByModel = Router();

getProductByModel.get("/", async (req, res, next) => {
  const { name } = req.query;
  try {
    let allProducts = await Product.findAll();
    let productName = allProducts.filter((f) =>
      f.model.toLowerCase().includes(name.toLowerCase())
    );

    return productName.length
      ? res.send(productName)
      : res.status(404).send("No existe ese modelo de producto");
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = getProductByModel;
