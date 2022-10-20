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
const allBrand = require("../Controller/get_allBrand");
const allType = require("../Controller/get_allType");
const featuredProduct = require("../Controller/get_featuredProduct");
const postUser = require("../Controller/post_user");
const postUserAdress = require("../Controller/post_userAdress");
const getAllUsers = require("../Controller/get_allUser");
const deleteUserAdress = require("../Controller/delete_userAdress");

const postProductToCart = require("../Controller/cart/post_productToCart");


const verifyLogin = require("../Controller/get_verifyLogin");


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
router.use("/allBrand", allBrand);
router.use("/allType", allType);
router.use("/featuredProduct", featuredProduct);
router.use("/postUser", postUser);
router.use("/postUserAdress", postUserAdress);
router.use("/getUser", getAllUsers);
router.use("/deleteUserAdress", deleteUserAdress);

router.use("/productToCart", postProductToCart)
router.use("/verifyLogin",verifyLogin)


module.exports = router;
