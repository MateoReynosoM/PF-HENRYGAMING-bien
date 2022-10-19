const Router = require("express");
const { UserAdress, User } = require("../db");
const {Op}= require('sequelize')

const postUserAdress = Router();

//ejemplo http://localhost:3001/postUserAdress
/* {
    "adress": "aaaa",
    "city": "lima",
    "postalCode": 123123,
    "country": "peru",
    "phoneNumber":"123123123",
    "userId":1
  } */

postUserAdress.post("/", async (req, res, next) => {
    const {
        adress,
        city,
        postalCode,
        country,
        phoneNumber,
        userId,
    } = req.body;

      try {
      if(adress&&city&&postalCode&&country&&phoneNumber){
        const adressUser={
            adress,
            city,
            postalCode,
            country,
            phoneNumber
        }
        let createdAdress = await UserAdress.create(adressUser)
        let infoUserId= await User.findAll({
            where:{
              id:userId
            }}
          )
          /* console.log(infoUserId) */
          infoUserId?.map(m=>m.addUserAdress(createdAdress))
  
        if(createdAdress)res.json({message:"Adress añadida correctamente",data:createdAdress})
        else res.json({message:"Error no se obtuvieron todos los datos correspondientes"})
      }
        } catch (error) {
            next(error)
        }
})

module.exports = postUserAdress;
