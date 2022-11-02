export const findPriceTotal = (cart) => {
    const products = cart.cartProducts.map((p) => {
        return { ...p.product, amount: p.amount };
    });
    let price = 0;
    products.forEach((p) => {
        price += p.price*157* p.amount;
    });
    return price;
};


//Local cart Function
export const findPriceTotalLocal = (cart) => {
    const products = cart.map((p) => {
        return { ...p, amount: p.amount };
    });
    let price = 0;
    products.forEach((p) => {
        price += p.price*157* p.amount;
    });
    return price;
};
