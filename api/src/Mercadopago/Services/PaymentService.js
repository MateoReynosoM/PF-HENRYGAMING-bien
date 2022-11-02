const axios = require("axios");

class PaymentService {
    async createPayment(productList) {
        const url = "https://api.mercadopago.com/checkout/preferences";

        // Hay que actualizar back_urls para que pueda tomar localhost o la url de vercel antes de mergear a development

        const body = {
            items: productList[0].cartProducts.map((e) => ({
                id: e.product.id,
                title: `${e.product.brand.name} ${e.product.model}`,
                unit_price: (e.product.price*157),
                quantity: e.amount,
            })),
            back_urls: {
                success: process.env.SERVICES_URL? `${process.env.SERVICES_URL}/purchaseSuccess` : "http://localhost:3000/purchaseSuccess",
                failure: process.env.SERVICES_URL? `${process.env.SERVICES_URL}/purchaseFailiure` :"http://localhost:3000/purchaseFailiure",
                pending: process.env.SERVICES_URL? `${process.env.SERVICES_URL}/purchasePending` :"http://localhost:3000/purchasePending",
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
