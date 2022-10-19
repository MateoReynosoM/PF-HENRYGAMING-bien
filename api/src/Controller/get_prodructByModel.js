const Router = require("express");
const { Product } = require("../db");


//ejemplo: http://localhost:3001/productModel?name=ryzen


const getProductByModel = Router();

getProductByModel.get("/", async (req, res, next) => {
  const { name } = req.query;
  try {
    let allProducts = await Product.findAll();
    if(name){
    let productName = allProducts.filter((f) =>
      f.model.toLowerCase().includes(name.toLowerCase())
      );
      
      return productName.length
      ? res.send(productName)
      : res.status(404).send("No existe ese modelo de producto");
    }else{
      allProducts.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (b.id > a.id) {
          return -1;
        }
        return 0;
      });
      res.send(allProducts)
    }
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = getProductByModel;
