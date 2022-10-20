const Router = require("express");
const { Product, Category, Brand } = require("../db");
// ejemplo ruta: http://localhost:3001/productDetail/2

const getDetail = Router();

getDetail.get("/:id", (req, res, next) => {
  const { id } = req.params;

  if (!id) return res.status(404).json({ message: "No se econtro un id." });

  try {

    //let product;
       Product.findByPk(id,{
        attributes:['model','img','price','detail','type' ],
        include:[
          {model: Category}, {model: Brand}
        ]
       }).then((instance) => res.send(instance))


  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = getDetail;
