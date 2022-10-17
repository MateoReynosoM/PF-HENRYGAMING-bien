const Router = require("express");
const { Category } = require("../db");


//ejemplo de ruta: http://localhost:3001/allTypes

const getAllTypes = Router();

getAllTypes.get("/", async (req, res, next) => {
  try {
    let allTypes = await Category.findAll();
    allTypes.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (b.id > a.id) {
        return -1;
      }
      return 0;
    });
    return res.json(allTypes);
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = getAllTypes;