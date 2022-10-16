const Router = require("express");
const { Product } = require("../db");

const getPrice = Router();

//la ruta busca filtra por precio. Se puede poner solo precio o mayor o solo menor. O con los 2 juntos busca todos los productos que esten entre esos 2 precios
//ejemplo de busqueda http://localhost:3001/productPrice?min=100&max=200
getPrice.get("/", async (req, res, next) => {
  const { max, min } = req.query;
  if (max<min){
    return res.status(404).json({ message: "El precio minimo no puede ser mayor que el maximo" })
  }
  if (!max && !min)
    return res.status(404).json({ message: "Debe introducir un precio." });

  try {
    var precioEntre = [];
    var precio = await Product.findAll();
    if (max && min) {
      precioEntre = precio.filter((el) => el.price >= min && el.price <= max);
    }
    if (!min && max) {
      precioEntre = precio.filter((el) => el.price >= 0 && el.price <= max);
    }
    if (!max && min) {
      precioEntre = precio.filter(
        (el) => el.price >= min && el.price <= 99999999999
      );
    }

     precioEntre.sort(function (a, b) {
       if (a.price > b.price) {
        return 1;
       }
       if (b.price > a.price) {
         return -1;
       }
       return 0;
    });

    return precioEntre.length
      ? res.status(200).send(precioEntre)
      : res.status(404).send("No se recibio un precio valido ");
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = getPrice;
