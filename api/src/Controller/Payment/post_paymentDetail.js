const Router = require("express");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { CartProduct, Cart, Product, PaymentDetail,PurchaseDetail ,PurchasedProduct} = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/paymentDetail

const postPaymentDetail = Router();

postPaymentDetail.post("/", verifyToken, async (req, res, next) => {
  const tokennn = req.headers["x-access-token"];
  const decoded = jwt.verify(tokennn, SECRET);
    req.userId = decoded.id;
    var userId = req.userId;

        const {amount, provider, state} = req.body
        if(state==="failure" || state==="pending")res.status(404).send({message:"Payment status is pending or failed, please try again later"})
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
        
        let cart = await Cart.findOne({
          where:{
            userId:userId
          }
        })
        console.log(cart);
        const paymentDetail = await PaymentDetail.create(paymentData);

        const purchaseDetail = await PurchaseDetail.create({total:cart.total,userId:userId,paymentDetailId:paymentDetail.id })

        var products = productosCarrito.map((m)=> 
        {return{amount:m.amount, productId:m.productId, purchaseDetailId:purchaseDetail.id }}
        )

        const purchasedProducts = await PurchasedProduct.bulkCreate(products)


    try {
        let answer= await PaymentDetail.findAll({
          where:{
            userId:userId
          },
          include:{
            model:PurchaseDetail,
            include:{
              model:PurchasedProduct
            }
          }
        })
  
    return res.status(200).json(answer);
    
  } catch (error) {
    next(error);
  }
});

module.exports = postPaymentDetail;