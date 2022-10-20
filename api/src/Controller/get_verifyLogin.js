const Router = require("express");
const { User } = require("../db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = process.env;
const { verifyToken, isAdmin } = require('./jwt_middlewares.js');

const verifyLogin = Router();

verifyLogin.get("/", async (req, res, next) => {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
      
        if (user) {
          if (bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ id: user.id }, SECRET);
            return res.status(200).json({ token });
          } else {
            res.json({ msg: "Wrong Password" });
          }
        } else {
          res.json({ msg: "Email not found" });
        }
})

module.exports = verifyLogin;
