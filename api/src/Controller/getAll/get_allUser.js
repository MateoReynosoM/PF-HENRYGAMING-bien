const Router = require("express");
const { User, UserAdress } = require("../../db");
const { verifyToken, isAdmin } = require("../Utils/jwt_middlewares");

//ejemplo de ruta: http://localhost:3001/getUser

const getAllUsers = Router();

getAllUsers.get("/", [verifyToken, isAdmin], async (req, res, next) => {
  try {
    let allUsers = await User.findAll({
      include: {
        model: UserAdress,
        attributes: ["adress", "postalCode", "city", "country", "phoneNumber"],
      },
    });

   /*  allUsers.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (b.id > a.id) {
        return -1;
      }
      return 0;
    }); */
    return res.json(allUsers);
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = getAllUsers;
