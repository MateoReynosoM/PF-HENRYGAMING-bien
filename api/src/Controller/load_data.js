const jsonData = require('../data.json');
const {Product, Category, Brand} = require('../db');



module.exports= ()=>{


    const brands = jsonData.reduce((acc,item)=>{
        if(!acc.includes(item.brand)){
            acc.push(item.brand);
        }
        return acc;
    },[]).forEach(async(ele) =>{
        await Brand.create({ name: ele}); 
    })

    const categories =  jsonData.reduce((acc,item)=>{
        if(!acc.includes(item.type)){
            acc.push(item.type);
        }
        return acc;
    },[]).forEach(async(ele) =>{
        await Category.create({ name: ele});
    })

    jsonData.forEach(async(e)=>{



        let [product, createdProduct] = await Product.findOrCreate({
            where:{
                model: e.model
            },defaults:{
                img: e.img,
                model: e.model,
                price: e.price
            }
        })

        Category.findOne({
            where:{
                name: e.type
            }
        }).then(async(category)=>{
            await category.addProduct(product)
        }).catch(err=> console.error(err))

        Brand.findOne({
            where:{
                name: e.brand
            }
        }).then(async(brand) => {

        await brand.addProduct(product)
        }).catch(err => console.error(err))



    })

}