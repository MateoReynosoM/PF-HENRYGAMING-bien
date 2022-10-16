const Router = require("express");
const { Product } = require("../db");

const getAllProducts = Router();

getAllProducts.get("/", async (req, res, next) => {
    try {
        let allProducts = await Product.findAll();
        return res.json(allProducts);
    } catch (error) {
        console.error(error);
        next();
    }
});

module.exports = getAllProducts;