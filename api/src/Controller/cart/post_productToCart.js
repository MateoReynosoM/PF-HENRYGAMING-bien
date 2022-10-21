const Router = require("express");
const { Sequelize } = require("sequelize");
const { User, Product, Cart, CartProduct } = require("../../db");
const { Op } = require("Sequelize");
const { verifyToken } = require("./../jwt_middlewares");

const routeProductCart = Router();

/*
    post recibe por body = {
        idUser: id de usuario actual
        idproduct: id del producto seleccionado
        amount: (opcion) cantidada de productos que ingresan al carro,
         se deberia multiplicar el precio 
    }
    carga de a uno o varios articulos del mismo tipo y distino, actualiza el total de cart
    aparte debe haber una ruta delete

 ver de optimizar:
*/
//ejemplo de ruta: http://localhost:3001/productToCart
/* {
  "idUser":4,
  "idProduct":6,
  "amount":12
} */

routeProductCart.post("/",verifyToken, async (req, res, next) => {
  const { idUser, idProduct, amount } = req.body;
  if (!idUser && !idProduct)
    return res.send({ message: "No se enviaron los datos correctos" });
  try {
    const user = await User.findByPk(idUser);

    const product = await Product.findByPk(idProduct);

    const [cart, createdCart] = await Cart.findOrCreate({
      where: {
        userId: idUser,
      },
      defaults: {
        total: product.price,
      },
    });

    const [cartProduct, createdCartProduct] = await CartProduct.findOrCreate({
      include: [{ model: Product }, { model: Cart }],
      where: {
        [Op.and]: [{ productId: idProduct }, { cartId: cart.id }],
      },
      defaults: {
        amount: amount? amount: 1,
        cartId: cart.id,
        productId: idProduct,
      },
    });

    if (!createdCart && !createdCartProduct) {
      //update en el caso de que no sea el primer producto
      await cart.update({
        total: amount
          ? cart.total + product.price * amount
          : cart.total + product.price,
      });
      await cartProduct.update({
        amount: amount ? cartProduct.amount + amount : cartProduct.amount + 1,
      });
      await cart.save();
      await cartProduct.save();
      return res.send({ message: "Se agrego un producto similar" });
    }
    if (!createdCart && createdCartProduct) {
      await cart.update({
        total: amount
          ? cart.total + product.price * amount
          : cart.total + product.price,
      });
      await cart.save();
      return res.send({ message: "Se agrego un producto diferente" });
    }
    if (cart && createdCart) {
      await user.createCart(cart);
    }
    if (
      user &&
      product &&
      cart &&
      cartProduct &&
      createdCart &&
      createdCartProduct
    ) {
      await cart.addCartProduct(cartProduct);
      await product.createCartProduct(cartProduct);
    }

    return res.send({ message: "Se agrego un producto al carrito" });
  } catch (error) {
    console.error(error);
  }
});

module.exports = routeProductCart;
