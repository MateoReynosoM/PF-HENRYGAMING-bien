const Router = require("express");
const { User } = require("../../db");
const bcrypt = require("bcrypt");
const saltRound = 10;
const salt = bcrypt.genSaltSync(saltRound);
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

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

      const existentEmail = await User.findOne({where:{email:email}})
      console.log(existentEmail);
      const existentUserName = await User.findOne({where:{userName:userName}})
      console.log(existentUserName);
      if(existentEmail && existentUserName){
        res.status(404).send("Username and email already in use")
      }else if(existentEmail && !existentUserName){
        res.status(404).send("Email already in use")
      }else if(!existentEmail && existentUserName){
        res.status(404).send("Username already in use")
      }

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
        res.status(404).send("Error no se obtuvieron todos los datos correspondientes");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = postUser;
