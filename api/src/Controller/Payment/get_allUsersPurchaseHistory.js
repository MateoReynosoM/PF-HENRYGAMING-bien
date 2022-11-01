const Router = require("express");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const {  PaymentDetail,PurchaseDetail, Product, PurchasedProduct} = require("../../db");
const { verifyToken, isAdmin } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/purchaseHistory


const allUsersPurchaseHistory = Router();

allUsersPurchaseHistory.get("/", [verifyToken,isAdmin], async (req, res, next) => {
  

    let answer = await PaymentDetail.findAll({
        include:{
            model: PurchaseDetail,
            include:{
              model:PurchasedProduct,
              include:{
                model:Product
              }
            }
        }
    })
        


    try {
        
  
    return res.status(200).json(answer);
    
  } catch (error) {
    next(error);
  }
});

module.exports = allUsersPurchaseHistory;