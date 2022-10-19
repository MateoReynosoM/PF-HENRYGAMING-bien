const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const detail = require("../Controller/get_detail");
const post = require("../Controller/post_products");
const type = require("../Controller/get_type");
const price = require("../Controller/get_price");
const products = require("../Controller/get_products");
const byModel = require("../Controller/get_prodructByModel");
const byBrand = require("../Controller/get_byBrand");
const cpuBrand = require("../Controller/get_cpuBrand");
const get_allBrand = require("../Controller/get_allBrand");
const get_allType = require("../Controller/get_allType");
const deleteUserAdress = require("../Controller/delete_userAdress");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/productDetail/", detail);
router.use("/postProduct", post);
router.use("/productType", type);
router.use("/productPrice", price);
router.use("/productModel", byModel);
router.use("/brand", byBrand);
router.use("/cpuBrand", cpuBrand);
router.use("/products", products);
router.use("/allBrand", get_allBrand);
router.use("/allType", get_allType);
router.use("/deleteUserAdress", deleteUserAdress);

module.exports = router;
