const Router = require("express");
const { where } = require("sequelize");
const { CartProduct, Product, Cart } = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/deleteCartProduct?id=1

const deleteCartProduct = Router();

deleteCartProduct.delete("/", verifyToken, async (req, res, next) => {
  const { id } = req.query;

  try {
    let productDestroy = await CartProduct.findOne({
      where:{
        id: id
      },
      include:[
        {
          model: Product,
          atributes:['price']
        },
        {
          model: Cart,
          atributes:['total']
        }
      ]
    });

    console.log(productDestroy.product.price, productDestroy.cart.total)
  
    if(productDestroy){
        let cart = await Cart.findByPk(productDestroy.cartId);

        await cart.update({
          total: productDestroy.cart.total - (productDestroy.product.price * productDestroy.amount) 
        });
        await cart.save();
        await productDestroy.destroy();
        if (productDestroy) return res.send("Product deleted successfully");

    }else{
      return res.status(404).send("Product not found");
    }
   

/*     
     */
  } catch (error) {
    console.log(error)
    next(error);
  }
});

module.exports = deleteCartProduct;
