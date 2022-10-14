const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const detail = require("../Controller/get_detail");
const post = require("../Controller/post_products");
const type = require("../Controller/get_type");
const price = require("../Controller/get_price");
const brand = require("../Controller/get_brand");
const cpuBrand = require("../Controller/get_cpuBrand")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/productDetail/", detail);
router.use("/postProduct", post);
router.use("/productType", type);
router.use("/productPrice", price);
router.use("/brand", brand);
router.use("/cpuBrand", cpuBrand);

module.exports = router;
