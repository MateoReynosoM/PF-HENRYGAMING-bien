const axios = require("axios");

class PaymentService {
    async createPayment(productList) {
        const url = "https://api.mercadopago.com/checkout/preferences";

        // Hay que actualizar back_urls para que pueda tomar localhost o la url de vercel antes de mergear a development

        const body = {
            items: productList[0].cartProducts.map((e) => ({
                id: e.product.id,
                title: `${e.product.brand.name} ${e.product.model}`,
                unit_price: e.product.price,
                quantity: e.amount,
            })),
            back_urls: {
                success: "http://localhost:3000/purchaseSuccess",
                failure: "http://localhost:3000/purchaseFailiure",
                pending: "http://localhost:3000/purchasePending",
            },
            auto_return: "approved",
        };

        const payment = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
            },
        });

        return payment.data;
    }
}

module.exports = PaymentService;
