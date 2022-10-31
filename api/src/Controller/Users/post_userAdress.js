const Router = require("express");
const { UserAdress, User } = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const postUserAdress = Router();

//ejemplo http://localhost:3001/postUserAdress
/* {
    "adress": "aaaa",
    "city": "lima",
    "postalCode": 123123,
    "country": "peru",
    "phoneNumber":"123123123"
  } */

postUserAdress.post("/", verifyToken, async (req, res, next) => {
  const { adress, city, postalCode, country, phoneNumber } = req.body;

  const tokennn = req.headers["x-access-token"];
  const decoded = jwt.verify(tokennn, process.env.SECRET);
    req.userId = decoded.id;
    var userId = req.userId;
    console.log(userId);
  try {
    if (adress && city && postalCode && country && phoneNumber && userId) {
      const adressUser = {
        adress,
        city,
        postalCode,
        country,
        phoneNumber,
      };
      let createdAdress = await UserAdress.create(adressUser);
      let infoUserId = await User.findAll({
        where: {
          id: userId,
        },
      });
      infoUserId.length?infoUserId.map((m) => m.addUserAdress(createdAdress)):res.status(404).send("No User Found")
      

      if (createdAdress)
        res.json({
          message: "Adress añadida correctamente",
          data: createdAdress,userId
        });
      else
        res.json({
          message: "Error no se obtuvieron todos los datos correspondientes",
        });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = postUserAdress;
