require("dotenv").config();
const Router = require("express");
const { User, Product, Review } = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const postReview = Router();

//ejemplo: http://localhost:3001/addReview
/* {
    "idProduct":1,
    "idUser":1,
    "reviewUser":"asdfsdfsdfsdf"
} */

postReview.post("/", verifyToken, async (req, res, next) => {
  const tokennn = req.headers["x-access-token"];
  const decoded = jwt.verify(tokennn, process.env.SECRET);
    req.userId = decoded.id;
    var userId = req.userId;
  const {  idProduct, reviewUser } = req.body;
  
  try {
    let user, product;
    User.findByPk(userId)
      .then((instanceUser) => {
        user = instanceUser;
        return Product.findByPk(idProduct);
      })
      .then((instanceProduct) => {
        product = instanceProduct;
        return Review.create({
          review: reviewUser,
        });
      })
      .then(async (instanceReview) => {
        

        if (!product) return res.send({ message: "El producto no existe." });
        if (!user)
          return res.send({
            message: "No se encuentran los datos del usuario",
          });
        await user.addReview(instanceReview);
        await product.addReview(instanceReview);

        return res.send({ message: "Se agrego correctamente la reseña" });
      });
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = postReview;
