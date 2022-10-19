const Router = require("express");
const { where } = require("sequelize");
const { UserAdress, User } = require("../db");
const { Op } = require("sequelize");

//ejemplo de ruta

const deleteUserAdress = Router();

deleteUserAdress.delete("/", async (req, res, next) => {
  const { adressId } = req.query;

  try {
    let allUserAdress = await UserAdress.destroy({
      where: {
        id: adressId,
      },
    });
    // allUserAdress.destroy();
    // allUserAdress.destroy({
    //   where: {
    //     userAdresses: {
    //       adress: adress,
    //     },
    //   },
    // });
    if (allUserAdress) return res.send("No se encuentra esa direccion");
    return res.status(404).send("Direccion eliminada correctamente");
  } catch (error) {
    next(error);
  }
});

module.exports = deleteUserAdress;
