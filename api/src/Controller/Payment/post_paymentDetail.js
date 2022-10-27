const Router = require("express");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { CartProduct, Cart, Product, PaymentDetail,PurchaseDetail ,PurchasedProduct} = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/

const postPaymentDetail = Router();

postPaymentDetail.post("/", verifyToken, async (req, res, next) => {
  const tokennn = req.headers["x-access-token"];
  const decoded = jwt.verify(tokennn, SECRET);
    req.userId = decoded.id;
    var userId = req.userId;

        const {amount, provider, state} = req.body
        if(!amount&&!provider&&!state)res.status(404).send({message:"Some information was not provided"})
        const paymentData={
            amount,
            provider,
            state,
            userId:userId
        }
        let productosCarrito= await CartProduct.findAll({
        where:{
        cartId:userId
        },
        include:{
            model:Product
          }
        }
        )
        console.log(productosCarrito)
        var products = productosCarrito.map((m)=> 
        {return{amount:m.amount, productId:m.productId}}
        )

        
        const purchasedProducts = await PurchasedProduct.bulkCreate(products)
        const paymentDetail = await PaymentDetail.create(paymentData);
    

    try {
        
        



    
    return res.status(200).json([paymentDetail,purchasedProducts]);
    
  } catch (error) {
    next(error);
  }
});

module.exports = postPaymentDetail;