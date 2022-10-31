const Router = require("express");
const { User, Cart , FavoriteProduct, Favorites} = require("../../db");
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

//ruta post user crear carrito

const postUser = Router();

postUser.post("/", async (req, res, next) => {
  const { userName, firstName, lastName, email, password } = req.body;

  try {
    if (userName && firstName && lastName && email && password) {
      let a = bcrypt.hashSync(password, salt);

      const existentEmail = await User.findOne({where:{email:email}})
      
      const existentUserName = await User.findOne({where:{userName:userName}})
      
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
      //creacion de cart y asociacion
      const cart = await Cart.create({total: 0, userId: user.id});
      const favorite = await Favorites.create({amount:0,userId: user.id});
      /* const favoriteProduct = await FavoriteProduct.create({favoriteId:user.id,type:"a",model:"aa"}); */


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
