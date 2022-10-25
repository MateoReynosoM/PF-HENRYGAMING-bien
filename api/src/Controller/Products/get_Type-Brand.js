const Router = require("express");
const { type } = require("os");
const { Product, Category, Brand, Review } = require("../../db");
// ejemplo ruta: http://localhost:3001/typeBrand/2

const getTypeBrand = Router();

getTypeBrand.get("/:typeId",async (req, res, next) => {
  const { typeId } = req.params;

  if (!typeId) return res.status(404).json({ message: "No se econtro un Type id." });

  try {
    //let product;
    let typeBrand = await Product.findAll({
        where:{
            categoryId:typeId,
        },
        include:{
          model:Brand
        }
    })
    console.log(typeBrand);
    let a = typeBrand.map((el) =>{return{
        id:el.brandId,
        brand:el.brand.name
    }});
    let b = []
    for (let i = 0; i < a.length; i++) {
        if(!b.includes(a[i].brand)){
            b.push(a[i].brand,a[i].id)
        }
    }
    
    
    if(typeBrand)return res.send(b);
   
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = getTypeBrand;
