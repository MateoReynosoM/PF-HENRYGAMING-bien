const Router = require("express");
const { User } = require("../db");

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
    const {
        userName,
        firstName,
        lastName,
        email,
        password
    } = req.body;

      try {
      if(userName&&firstName&&lastName&&email&&password){
        const [user, created] = await User.findOrCreate({
            where: { 
                userName,
                firstName,
                lastName,
                email,
                password
            }
          });

        if(user)res.json({message:"Usuario creado correctamente",data:user})
        else res.json({message:"Error no se obtuvieron todos los datos correspondientes"})
      }
        } catch (error) {
            next(error)
        }
})

module.exports = postUser;

