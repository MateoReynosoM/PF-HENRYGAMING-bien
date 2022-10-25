const { Cart, CartProduct, Product, Brand } = require("../../db");

class PaymentController {
    constructor(subscriptionService) {
      this.subscriptionService = subscriptionService;
    }
  
    async getPaymentLink(req, res) {
      try {
        const {userId} = req.body
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
        console.log(error);
  
        return res
          .status(500)
          .json({ error: true, msg: "Failed to create payment" });
      }
    }
  
  }
  
  module.exports = PaymentController;