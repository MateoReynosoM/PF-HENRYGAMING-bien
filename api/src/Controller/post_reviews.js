const Router = require("express");
const { User, Product, Review } = require("../db");

const postReview = Router();

//ejemplo: http://localhost:3001/addReview
/* {
    "idProduct":1,
    "idUser":1,
    "reviewUser":"asdfsdfsdfsdf"
} */

postReview.post("/", async (req, res, next) => {
  const { idUser, idProduct, reviewUser } = req.body;
  try {
    let user, product;
    User.findByPk(idUser)
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
        console.log(user);
        console.log(product);

        if (!product) return res.send({ message: "El producto no existe." });
        if (!user)
          return res.send({
            message: "No se encuentran los datos del usuario",
          });
        await user.addReview(instanceReview);
        await product.addReview(instanceReview);

        return res.send({ message: "Se agregor correctamente la reseña" });
      });
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = postReview;
