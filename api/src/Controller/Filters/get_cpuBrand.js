const Router = require("express");
const { Product } = require("../../db");

const getCpuBrand = Router();
//brandId de intel= 3
//brandId de AMD= 2

getCpuBrand.get("/", async (req, res, next) => {
  const { brandId } = req.query;

  if (!brandId)
    return res.status(404).json({ message: "No se econtro ese brand." });

  try {
    let products = await Product.findAll({
      where: {
        type: "CPU",
      },
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

    return productsBrand.length
      ? res.status(200).send(productsBrand)
      : res.status(404).send("No se recibio un brand correcto");
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = getCpuBrand;
