import submitOrder from '../../utils/api/submitOrder'
import sendConfirmationEmail from '../../utils/api/sendConfirmationEmail'

const handler = async (req, res) => {
   try {
      const { orderID, data } = req.body
      const [isSubmitted, isSubmittedError] = await submitOrder(orderID)
      sendConfirmationEmail(data)
      if (isSubmittedError) throw isSubmittedError
      return res.status(200).json({})
   } catch (error) {
      return res.status(400).json({ message: error })
   }
};

export default handler;