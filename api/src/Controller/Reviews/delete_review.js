require("dotenv").config();
const Router = require("express");
const { Review } = require("../../db");
const { verifyToken } = require("../Utils/jwt_middlewares");

// Ruta para admin
//ejemplo: http://localhost:3001/removeReview/1

const deleteReview = Router();

///agregar el middleware verifyToken
deleteReview.delete("/:id", verifyToken, async (req, res, next) => {
  const { id } = req.params;

  try {
    const review = await Review.findByPk(id);

    if (!!review) {
      review.destroy();
      return res.send({ message: "Se elimino la reseña correctamente" });
    }else{
      res.status(404).json({message: 'Reseña no encontrada'});
    }
  } catch (error) {
    res.json({ message: "Ocurrio un Error" });
    console.error(error);
    next();
  }
});

module.exports = deleteReview;
