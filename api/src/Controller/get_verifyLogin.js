const Router = require("express");
const { User } = require("../db");
const bcrypt = require('bcrypt');


const verifyLogin = Router();

verifyLogin.get("/", async (req, res, next) => {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
      
        if (user) {
          if (bcrypt.compareSync(password, user.password)) {
            console.log(password)
            console.log(user.password)
            res.status(200).json({msg: "user logged",data:user});
          } else {
            res.json({ msg: "Wrong Password" });
          }
        } else {
          res.json({ msg: "Email not found" });
        }
})

module.exports = verifyLogin;
