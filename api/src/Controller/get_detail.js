const Router = require('express');
const {Product} = require('../db');




const getDetail = Router();




getDetail.get('/:id', (req, res, next)=>{

    const {id} = req.params;

    if(!id) return res.status(404).json({message: 'No se econtro un id.'});

    try {

        Product.findByPk(id).then(instance =>{
            res.send(instance);
        })


    } catch (error) {

        console.error(error);
        next()

    }




});


module.exports = getDetail;