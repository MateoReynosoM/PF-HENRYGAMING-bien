const Router = require("express");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const {  PaymentDetail,PurchaseDetail, Product, PurchasedProduct} = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/purchaseHistory


const purchaseHistory = Router();

purchaseHistory.get("/", verifyToken, async (req, res, next) => {
  const tokennn = req.headers["x-access-token"];
  const decoded = jwt.verify(tokennn, process.env.SECRET);
    req.userId = decoded.id;
    var userId = req.userId;

    let answer = await PaymentDetail.findAll({
        where:{
            userId:userId
        },
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

module.exports = purchaseHistory;