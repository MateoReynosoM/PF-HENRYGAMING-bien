const Router = require("express");
const { Brand } = require("../db");


//ejemplo de ruta: http://localhost:3001/allBrands

const getAllBrands = Router();

getAllBrands.get("/", async (req, res, next) => {
  try {
    let allBrands = await Brand.findAll({
      attributes:["name"]
    });
    allBrands.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (b.id > a.id) {
        return -1;
      }
      return 0;
    });
    return res.json(allBrands);
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = getAllBrands;