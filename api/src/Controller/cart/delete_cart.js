const Router = require("express");
const { where } = require("sequelize");
const { Cart, CartProduct } = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/deleteCart?cartId=1

const deleteCart = Router();

//modificar para que borre todos los items de una vez 
////ruta clear all, borra todo los items del carrito

deleteCart.delete("/", /* verifyToken ,*/ async (req, res, next) => {
  const { cartId } = req.query;

  try {
   /*  let cartDestroy = await Cart.destroy({
      where: {
        id: cartId,
      },
    }); 

    if (cartDestroy) return res.send("cart deleted successfully");
    return res.status(404).send("Cart not found");*/
    let allCartProducts =  await CartProduct.findAll({
      where:{
        cartId: cartId,
      }
    })
    let cart = await Cart.findByPk(cartId);
    
    if(allCartProducts.length > 0){

      allCartProducts.forEach(async(element) => {
        
        await element.destroy();
        

      });

      await cart.update({total: 0});
      await cart.save();

      return res.send({message: 'Se han eliminado todos los productos. Y restaurado el total'})
    }else{
      res.status(404).json({message: 'No hay Productos para eliminar.'})
    }

  } catch (error) {
    next(error);
  }
});

module.exports = deleteCart;
