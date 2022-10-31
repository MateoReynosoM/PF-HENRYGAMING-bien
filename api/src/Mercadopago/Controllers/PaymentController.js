const { Cart, CartProduct, Product, Brand } = require("../../db");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

//ejemplo de ruta: http://localhost:3001/payment

class PaymentController {
    constructor(subscriptionService) {
      this.subscriptionService = subscriptionService;
    }
  
    async getPaymentLink(req, res) {
      try {
        const tokennn = req.headers["x-access-token"];
        const decoded = jwt.verify(tokennn, process.env.SECRET);
          req.userId = decoded.id;
          var userId = req.userId;
        
        let productList= await Cart.findAll({
          where:{
            userId:userId
          },
          include:{
            model:CartProduct,
            include:{
              model:Product,
              include:{
                model:Brand
              }
            }
          }
        })
       
        const payment = await this.subscriptionService.createPayment(productList);
  
        return res.json(payment);
      } catch (error) {
        
  
        return res
          .status(500)
          .json({ error: true, msg: "Failed to create payment" });
      }
    }
  
  }
  
  module.exports = PaymentController;