import createPaymentIntent from '../../utils/api/createPaymentIntent'
import createOrder from '../../utils/api/createOrder'

const handler = async (req, res) => {
   try {
      // Add logic to start order with Prodigi
      const { items } = req.body
      const clientSecret = await createPaymentIntent(items)
      const [orderID, orderError] = await createOrder()
      if (orderError) throw orderError
      return res.json({ clientSecret, orderID });
   } catch (error) {
      return res.status(400).json({ message: error })
   }
};

export default handler;