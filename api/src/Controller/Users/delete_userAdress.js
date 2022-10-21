const Router = require("express");
const { where } = require("sequelize");
const { UserAdress } = require("../../db");
const { Op } = require("sequelize");
const { verifyToken } = require("../jwt_middlewares");

//ejemplo de ruta http://localhost:3001/deleteUserAdress?adressId=1

const deleteUserAdress = Router();

deleteUserAdress.delete("/", verifyToken, async (req, res, next) => {
  const { adressId } = req.query;

  try {
    let allUserAdress = await UserAdress.destroy({
      where: {
        id: adressId,
      },
    });
    //
    if (allUserAdress) return res.send("Direccion eliminada correctamente");
    return res.status(404).send("No se encuentra esa direccion");
  } catch (error) {
    next(error);
  }
});

module.exports = deleteUserAdress;
