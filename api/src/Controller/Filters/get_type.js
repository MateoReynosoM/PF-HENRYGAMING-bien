const Router = require("express");
const { Product, Brand } = require("../../db");

//ejemplo de ruta: http://localhost:3001/productType?type=keyboard

const getType = Router();

getType.get("/", async (req, res, next) => {
  const { type } = req.query;

  if (!type)
    return res.status(404).json({ message: "No se econtro ese Type." });

  try {
    /* let productsType = products.filter((el) => el.categoryId==id ); */
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
      include:{
        model:Brand
      }
    });
    let productsType = products.filter((el) =>
      (el) => el.categoryId === parseInt(type)
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
