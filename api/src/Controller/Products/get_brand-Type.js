const Router = require("express");
const { type } = require("os");
const { Product, Category, Brand, Review } = require("../../db");
// ejemplo ruta: http://localhost:3001/brandType/2

const getTypeBrand = Router();

getTypeBrand.get("/:brandId",async (req, res, next) => {
  const { brandId } = req.params;

  if (!brandId) return res.status(404).json({ message: "No se econtro un Type id." });

  try {
    //let product;
    let brandType = await Product.findAll({
        where:{
            brandId:brandId,
        }
    })
    let a = brandType.map((el) =>{return{
        id:el.categoryId
    }});
    let b = []
    for (let i = 0; i < a.length; i++) {
        if(!b.includes(a[i].id)){
            b.push(a[i].id)
        }
    }
    
    if(brandType)return res.send(b);
   
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = getTypeBrand;