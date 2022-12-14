const Router = require("express");
const { User } = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

// ejemplo de ruta: http://localhost:3001/verifyLogin?email=uu@gmail.com&password=123

const verifyLogin = Router();

verifyLogin.get("/", async (req, res, next) => {
  const { email, password } = req.query;
  const user = await User.findOne({ where: { email } });
  const bannedUser = await User.findOne({ where: { email },paranoid:false });

  if (user) {
    if(user.password==JSON.parse(process.env.ADMIN_USER).password){
      const token = jwt.sign({ id: user.id }, process.env.SECRET);
      return res.status(200).json({ token });
    }
    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ id: user.id }, process.env.SECRET);
      return res.status(200).json({ token });
    } else {
      res.status(404).send("Wrong Password");
    }
  }
  if (bannedUser) {
    if (bcrypt.compareSync(password, bannedUser.password)) {
      return res.status(404).send("User was banned");
    } else {
      res.status(404).send("Wrong Password");
    }
  }  else {
    res.status(404).send("Email not found");
  }
});

module.exports = verifyLogin;
