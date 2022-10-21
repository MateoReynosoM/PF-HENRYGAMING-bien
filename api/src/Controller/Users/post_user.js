const Router = require("express");
const { User } = require("../../db");
const bcrypt = require("bcrypt");
const saltRound = 10;
const salt = bcrypt.genSaltSync(saltRound);
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { verifyToken, isAdmin } = require("../jwt_middlewares.js");

//ejemplo http://localhost:3001/postUser
/* {
  "userName": "aaaa",
  "firstName": "lima",
  "lastName": "123123",
  "email": "peru@gmail.com",
  "password":"123123123"
} */

const postUser = Router();

postUser.post("/", async (req, res, next) => {
  const { userName, firstName, lastName, email, password } = req.body;

  try {
    if (userName && firstName && lastName && email && password) {
      let a = bcrypt.hashSync(password, salt);

      const [user, created] = await User.findOrCreate({
        where: {
          userName,
          firstName,
          lastName,
          email,
          password: a,
        },
      });

      const token = jwt.sign({ id: user.id }, SECRET);

      if (user) res.json({ token, data: user });
      else
        res.json({
          message: "Error no se obtuvieron todos los datos correspondientes",
        });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = postUser;
