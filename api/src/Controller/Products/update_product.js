const Router = require('express');
const {Product} = require('../../db');


//ruta admin



const updateProduct = Router();




// agregar verify
updateProduct.put('/:id',async (req, res, next)=>{
    
    const {id} = req.params;
    const {
        category,
        brand,
        model,
        price,
        createdInDb,
        detail,
        img,
        type,
    } = req.body;

    try {
        
        let product = await Product.findByPk(id)

        if(product){

            await product.update({
                img: img? img : product.img,
                type: type? type: product.type,
                model: model ? model: product.model,
                price: price ? price: product.price,
                createdInDb: createdInDb? createdInDb: product.createdInDb,
                detail: detail? detail: product.detail,
                brandId: brand? brand: product.brandId,
                categoryId: category? category: product.categoryId,

            })
            await product.save()
            return res.send({message: 'Se actualizo correctamente.'})
        }else{
            res.status(404).json({message: 'El producto no existe.'})
        }
    } catch (error) {
        
        console.error(error)
        next()
    }
});


module.exports= updateProduct;

