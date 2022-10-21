require("dotenv").config();
const Router = require("express");
const { Review } = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");
//Ruta user
//Ejemplo http://localhost:3001/updateReview/2
/* {
  "newReview": "actualizado"
} */

const updateReview = Router();

//Agregar verifyToken
updateReview.put("/:id", verifyToken, (req, res, next) => {
  const { id } = req.params;
  const { newReview } = req.body;

  try {
    if (id && newReview) {
      Review.findByPk(id).then(async (instance) => {
        await instance.update({ review: newReview });

        await instance.save();

        return res.send({ message: "Se Actualizo correctamente" });
      });
    }
  } catch (error) {
    console.error(error);
    res.json({ message: "Ocurrio un Error" });
    next();
  }
});

module.exports = updateReview;
