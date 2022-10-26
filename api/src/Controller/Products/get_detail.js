const Router = require("express");
const { Product, Category, Brand, Review, User } = require("../../db");
// ejemplo ruta: http://localhost:3001/productDetail/2

const getDetail = Router();

getDetail.get("/:id", (req, res, next) => {
    const { id } = req.params;

    if (!id) return res.status(404).json({ message: "No se econtro un id." });

    try {
        //let product;
        Product.findByPk(id, {
            attributes: ["model", "img", "price", "detail", "type"],
            include: [{ model: Category }, { model: Brand }],
        }).then(async (instance) => {
            const reviews = await Review.findAll({
                where: {
                    productId: id,
                },
                include: [{ model: User, attributes: ["userName"] }],
            });
            console.log(reviews);
            let results = {
                detail: instance,
                reviews: reviews.length
                    ? reviews
                    : "No hay reseñas actualmente, Compre el producto y sea el primero en dar una Reseña",
            };

            res.send(results);
        });
    } catch (error) {
        console.error(error);
        next();
    }
});

module.exports = getDetail;
