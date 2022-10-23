const Router = require("express");
const { Product } = require("../../db");

const getByBrand = Router();

getByBrand.get("/", async (req, res, next) => {
  const { brandId } = req.query;

  if (!brandId)
    return res.status(404).json({ message: "No se econtro ese brand." });

  try {
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

    let productsBrand = products.filter((el) => el.brandId == brandId);
    productsBrand.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (b.id > a.id) {
        return -1;
      }
      return 0;
    });

    return productsBrand.length
      ? res.status(200).send(productsBrand)
      : res.status(404).send("No se recibio un brand correcto");
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = getByBrand;
