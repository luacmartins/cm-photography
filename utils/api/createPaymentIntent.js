let stripe = require("stripe")(process.env.STRIPE_TEST_KEY);
import options from '../../products/options'

const createPaymentIntent = async (items) => {
   const amount = items.reduce((acc, item) => acc += options.prices.list[item.options.material][item.options.size] * item.cartQuantity, 0) * 100
   const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd"
   })
   return paymentIntent.client_secret
}


export default createPaymentIntent;