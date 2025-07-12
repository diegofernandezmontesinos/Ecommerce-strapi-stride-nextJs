"use strict";

let stripe;

async function getStripeInstance() {
  if (!stripe) {
    const Stripe = (await import('stripe')).default;
    stripe = new Stripe(process.env.STRAPI_API_KEY);
  }
  return stripe;
}

const { createCoreController } = require("@strapi/strapi").factories;

function calcDiscountPrice(price, discount) {
  if (!discount) return price;
  const discountAmount = (price * discount) / 100;
  const result = price - discountAmount;
  return result.toFixed(2);
}

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async paymentOrder(ctx) {
    const { token, products, idUser, addressShipping } = ctx.request.body;
    let totalPayment = 0;
    products.forEach((product) => {
      const priceTemp = calcDiscountPrice(
        product.attributes.price,
        product.attributes.discount
      );
      totalPayment += Number(priceTemp) * product.quantity;
    });

    const stripe = await getStripeInstance();

    const charge = await stripe.charges.create({
      amount: Math.round(totalPayment * 100),
      currency: "eur",
      source: token.id,
      description: `Order from user ${idUser}`,
    });

    const data = {
      products,
      user: idUser,
      totalPayment: totalPayment,
      idPayment: charge.id,
      addressShipping,
    };

    const model = strapi.contentTypes["api::order.order"];
    const validData = await strapi.entityValidator.validateEntityCreation(
      model,
      data
    );

    const entry = await strapi.db.query("api::order.order").create({
      data: validData,
    });
    return entry;
  },
}));
