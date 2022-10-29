const Router = require("express");
const {  Product } = require("../../db");
const { verifyToken, isAdmin } = require("../Utils/jwt_middlewares");

//ejemplo de ruta http://localhost:3001/banUser?userId=2

const doNotShowProduct = Router();

doNotShowProduct.delete("/", [verifyToken,isAdmin], async (req, res, next) => {
  const { productId } = req.query;
  console.log(productId);

  try {
    const product = await Product.findOne({ where: { id: productId } });
    console.log(product);
    if (product) {
      
        await product.destroy()
        
        res.status(200).json({ msg: "user deleted", data: product });
        }
        
        return res.status(404).send("No se encuentra ese productId");
      
    
    
  } catch (error) {
    next(error);
  }
});

module.exports = doNotShowProduct;
