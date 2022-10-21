const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//CART
const deleteCart = require("../Controller/cart/delete_cart");
const deleteCartProduct = require("../Controller/cart/delete_cartProduct");
const getCart = require("../Controller/cart/get_cart");
const postProductToCart = require("../Controller/cart/post_productToCart");

//FILTERS
const byBrand = require("../Controller/Filters/get_byBrand");
const cpuBrand = require("../Controller/Filters/get_cpuBrand");
const price = require("../Controller/Filters/get_price");
const byModel = require("../Controller/Filters/get_productByModel");
const type = require("../Controller/Filters/get_type");

//GET ALL
const allBrand = require("../Controller/getAll/get_allBrand");
const allType = require("../Controller/getAll/get_allType");
const products = require("../Controller/getAll/get_products");
const getAllUsers = require("../Controller/getAll/get_allUser");

//REVIEWS
const post_review = require("../Controller/Reviews/post_reviews");
const delete_review = require("../Controller/Reviews/delete_review");
const uptade_review = require("../Controller/Reviews/update_review");

//PRODUCTS
const post = require("../Controller/Products/post_products");
const detail = require("../Controller/Products/get_detail");
const featuredProduct = require("../Controller/Products/get_featuredProduct");

//USERS
const postUser = require("../Controller/Users/post_user");
const postUserAdress = require("../Controller/Users/post_userAdress");
const deleteUserAdress = require("../Controller/Users/delete_userAdress");
const deleteUser = require("../Controller/Users/delete_user");
const verifyLogin = require("../Controller/Users/get_verifyLogin");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//CART
router.use("/deleteCart", deleteCart);
router.use("/deleteCartProduct", deleteCartProduct);
router.use("/getCart", getCart);
router.use("/productToCart", postProductToCart);

//FILTERS
router.use("/brand", byBrand);
router.use("/cpuBrand", cpuBrand);
router.use("/productPrice", price);
router.use("/productModel", byModel);
router.use("/productType", type);

//GET ALL
router.use("/allBrand", allBrand);
router.use("/allType", allType);
router.use("/products", products);
router.use("/getUser", getAllUsers);

//PRODUCTS
router.use("/productDetail/", detail);
router.use("/postProduct", post);
router.use("/featuredProduct", featuredProduct);

//REVIEWS
router.use("/addReview", post_review);
router.use("/removeReview/", delete_review);
router.use("/updateReview", uptade_review);

//USERS
router.use("/postUser", postUser);
router.use("/postUserAdress", postUserAdress);
router.use("/deleteUserAdress", deleteUserAdress);
router.use("/deleteUser", deleteUser);
router.use("/verifyLogin", verifyLogin);

module.exports = router;
