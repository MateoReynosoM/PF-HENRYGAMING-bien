const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//CART
const deleteCart = require("../Controller/cart/delete_cart");
const deleteCartProduct = require("../Controller/cart/delete_cartProduct");
const getCart = require("../Controller/cart/get_cart");
const postProductToCart = require("../Controller/cart/post_productToCart");

//FAVORITES
const getFavorites = require("../Controller/Favorites/get_favorites");
const deleteFavProduct = require("../Controller/Favorites/delete_favProduct");
const deleteAllFavs = require("../Controller/Favorites/delete_allFavs");
const postFav = require("../Controller/Favorites/post_productToFavorites");

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
const removeProduct = require("../Controller/Products/delete_product");
const updateProduct = require("../Controller/Products/update_product");
const typeBrand = require("../Controller/Products/get_Type-Brand");
const brandType = require("../Controller/Products/get_brand-Type");

//USERS
const postUser = require("../Controller/Users/post_user");
const postUserAdress = require("../Controller/Users/post_userAdress");
const deleteUserAdress = require("../Controller/Users/delete_userAdress");
const deleteUser = require("../Controller/Users/delete_user");
const verifyLogin = require("../Controller/Users/get_verifyLogin");
const getUserDetail = require("../Controller/Users/get_userDetail");
const getalladresses = require("../Controller/Users/get_allUserAdress");
const updateUser = require("../Controller/Users/update_user");

//PAYMENT & PURCHASE
const postPaymentDetail = require("../Controller/Payment/post_paymentDetail");
const purchaseHistory = require("../Controller/Payment/get_purchaseHistory");

//MERCADOPAGO
const PaymentController = require("../Mercadopago/Controllers/PaymentController");
const PaymentService = require("../Mercadopago/Services/PaymentService");
const PaymentInstance = new PaymentController(new PaymentService());
const { verifyToken } = require("../Controller/Utils/jwt_middlewares");

//ADMIN
const banUser = require("../Controller/admin/delete_banUser");
const unbanUser = require("../Controller/admin/delete_unbanUser");
const doNotShowProduct = require("../Controller/admin/delete_doNotShowProduct");
const showProduct = require("../Controller/admin/delete_showProduct");
const deleteUserPermanently = require("../Controller/admin/delete_deleteUserPermanently");
const switchAdmin = require("../Controller/admin/put_switchAdmin");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//CART
router.use("/deleteCart", deleteCart);
router.use("/deleteCartProduct", deleteCartProduct);
router.use("/getCart", getCart);
router.use("/productToCart", postProductToCart);

//FAVORITES
router.use("/getFavorites", getFavorites);
router.use("/deleteFavProduct", deleteFavProduct);
router.use("/deleteAllFavs", deleteAllFavs);
router.use("/postFav", postFav);

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
router.use("/removeProduct/", removeProduct);
router.use("/updateProduct", updateProduct);
router.use("/typeBrand", typeBrand);
router.use("/brandType", brandType);

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
router.use("/getUserDetail", getUserDetail);
router.use("/allAdresses", getalladresses);
router.use("/updateUser", updateUser);

//PAYMENT & PURCHASE
router.use("/paymentDetail",postPaymentDetail)
router.use("/purchaseHistory",purchaseHistory)


//MERCADOPAGO
router.get("/payment", verifyToken,async function (req, res, next) {
    PaymentInstance.getPaymentLink(req, res);
  });

//ADMIN
router.use("/banUser",banUser)
router.use("/unbanUser",unbanUser)
router.use("/doNotShowProduct",doNotShowProduct)
router.use("/showProduct",showProduct)
router.use("/deleteUserPermanently",deleteUserPermanently)
router.use("/switchAdmin",switchAdmin)


module.exports = router;
