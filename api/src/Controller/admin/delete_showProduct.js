const Router = require("express");
const { User, Product } = require("../../db");
const { verifyToken, isAdmin } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/banUser?userId=2

const showProduct = Router();

showProduct.delete("/", [verifyToken,isAdmin], async (req, res, next) => {
  const { productId } = req.query;
  

  try {
    let productDeleted = await Product.findOne({ where: { id: productId },paranoid:false });
    
    if (productDeleted) {
      
        
        
        await productDeleted.restore()
   
        res.status(200).json({ msg: "product unbaned", data: productDeleted });
        }else{
          return res.status(404).send("No se encuentra ese userId");
        } 
        
  } catch (error) {
    next(error);
  }
});

module.exports = showProduct;