const Router= require("express");
const {Product}= require("../../db");

//ruta Admin


const deleteProduct = Router();

//si no recibe una propiedad partialRemoval: true, elimina definitivamnete el producto de 
//la base de datos, si lo recibe cambia la propiedad createdInDb a false
//se tendria que corregir get allproduct para que busque todos los que tenga esta propiedad en true


// agregar verify
deleteProduct.delete('/:idProduct',async (req, res, next)=>{
    const {idProduct} = req.params;
    const {partialRemoval} = req.body;
    try {
        

        
        const productDeleted = await Product.findByPk(idProduct)


        
        if(!!productDeleted && !partialRemoval){
            //eliminacion definitiva
            await productDeleted.destroy();
            return res.send({message : 'Se elimino correctamente el Producto Seleccionado.'});
        }else if(productDeleted && partialRemoval){
            //Eliminacion parcial
            await productDeleted.update({createdInDb: false});
            await productDeleted.save();

            return res.send({message: 'Se elemino parcialmente de la base de datos'});
        }
        else{
            res.status(404).json({message: 'Producto no encontrado'})

        }

        
    } catch (error) {
 
        console.error(error);

        next();
    }


});

module.exports= deleteProduct;