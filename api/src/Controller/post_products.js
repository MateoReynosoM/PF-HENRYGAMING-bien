const Router = require("express");
const { Product, Brand, Category } = require("../db");
const { verifyToken, isAdmin } = require("./jwt_middlewares");

const postProduct = Router();

//ejemplo http://localhost:3001/postProduct
/* {
  "category": "aaaa",
  "brand": "lima",
  "model": "123123",
  "price": "peru@gmail.com",
  "createdInDb":"123123123"
  "rank": "123123",
  "detail": "peru@gmail.com",
  
} */

postProduct.post("/",[verifyToken, isAdmin], async (req, res, next) => {
  const {
    category,
    brand,
    model,
    price,
    createdInDb,
    rank,
    urlBenchMark,
    detail,
    img,
    type,
  } = req.body;

  console.log(model, price, brand, img);

  try {
    if (!category && !brand && !model && !price && !img && !createdInDb) {
      console.log("entro al primer if y fue al next, falta una propiedad");
      return res.status(404).json({ message: "Faltan Campos Obligatorios" });
    }
    if (!!req.body) {
      const [instanceCategory, createdCategory] = await Category.findOrCreate({
        where: {
          name: category,
        },
        defaults: {
          name: category,
        },
      });
      console.log(instanceCategory, createdCategory);

      const [instaceBrand, createdBrand] = await Brand.findOrCreate({
        where: {
          name: brand,
        },
        defaults: {
          name: brand,
        },
      });
      console.log(instaceBrand, createdBrand);

      const [product, createdProduct] = await Product.findOrCreate({
        where: {
          model: model,
        },
        include: {
          model: Category,
        },
        defaults: {
          type: category,
          model: model,
          price: price,
          createdInDb: createdInDb,
          rank: rank,
          urlBenchMark: urlBenchMark,
          detail: detail,
          img: img,
        },
      });

      console.log(product, createdProduct);

      if (createdBrand || !!instaceBrand) {
        await instaceBrand.addProduct(product);
      }
      if (createdCategory || !!instanceCategory) {
        await instanceCategory.addProduct(product);
      }

      res.send(product);
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Ocurrio un error desconocido" });
  }
});

module.exports = postProduct;
