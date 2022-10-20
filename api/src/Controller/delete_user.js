const Router = require("express");
const bcrypt = require('bcrypt');
const { User } = require("../db");


//ejemplo de ruta http://localhost:3001/deleteUser?userId=1&password=123

const deleteUser = Router();

deleteUser.delete("/", async (req, res, next) => {
  const { userId, password } = req.query;

  try {
    const user = await User.findOne({ where: { id:userId } });
    if (user) {
        if (bcrypt.compareSync(password, user.password)) {
            console.log("hola");
            let userd = await User.destroy({
              where: {
                id:userId,
              },
            });
          res.status(200).json({msg: "user deleted",data:userd});
        } else {
          res.json({ msg: "Wrong Password" });
    
    return res.status(404).send("No se encuentra ese userId");
    }}
    console.log(user);
  } catch (error) {
    next(error);
  }
});

module.exports = deleteUser;