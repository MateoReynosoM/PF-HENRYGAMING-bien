const axios = require("axios");

class PaymentService {
  async createPayment( productList) {
    const url = "https://api.mercadopago.com/checkout/preferences";
    
    
    const body = {
      items: productList[0].cartProducts.map((e) =>
        ({
          title: `${e.product.brand.name} ${e.product.model}`,
          unit_price: e.product.price,
          quantity: e.amount
        })
        )
      ,
      back_urls: {
        success: "/success",
        failure: "/failure",
        pending: "/pending",
      },
      auto_return: "approved",
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    return payment.data;
  }

  
}

module.exports = PaymentService;