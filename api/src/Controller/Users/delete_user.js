const Router = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../../db");
const { verifyToken, isAdmin } = require("../Utils/jwt_middlewares");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

//ejemplo de ruta http://localhost:3001/deleteUser?password=123

const deleteUser = Router();

deleteUser.delete("/", verifyToken, async (req, res, next) => {
  const { password } = req.query;
  const tokennn = req.headers["x-access-token"];
  const decoded = jwt.verify(tokennn, process.env.SECRET);
    req.userId = decoded.id;
    var userId = req.userId;

  try {
    const user = await User.findOne({ where: { id: userId } });
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        await user.destroy(userId)
        
        res.status(200).json({ msg: "user deleted", data: user });
      } else {
        res.json({ msg: "Wrong Password" });

        return res.status(404).send("No se encuentra ese userId");
      }
    }
    
  } catch (error) {
    next(error);
  }
});

module.exports = deleteUser;
