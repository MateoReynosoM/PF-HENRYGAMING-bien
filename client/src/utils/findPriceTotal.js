const findPriceTotal = (cart) => {
    const products = cart.cartProducts.map((p) => {
        return { ...p.product, amount: p.amount };
    });
    let price = 0;
    products.forEach((p) => {
        price += p.price * p.amount;
    });
    return price;
};

export default findPriceTotal;
