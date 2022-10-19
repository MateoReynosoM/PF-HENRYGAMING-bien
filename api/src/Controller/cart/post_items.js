const Router = require("express");
const { CartProduct } = require("../db");

//ejemplo http://localhost:3001/postUser
/* {
  "userName": "aaaa",
  "firstName": "lima",
  "lastName": "123123",
  "email": "peru@gmail.com",
  "password":"123123123"
} */

const postCartProduct = Router();

postCartProduct.post("/", async (req, res, next) => {
    const {
        userId,
        cartId,
        productId,
        amount        
    } = req.body;

      try {
      if(userId&&cartId&&productId&&amount){
        

        if(user)res.json({message:"Usuario creado correctamente",data:user})
        else res.json({message:"Error no se obtuvieron todos los datos correspondientes"})
      }
        } catch (error) {
            next(error)
        }
})

module.exports = postCartProduct;