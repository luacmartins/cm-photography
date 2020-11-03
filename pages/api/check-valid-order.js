import checkValidOrder from '../../utils/api/checkValidOrder'

const handler = async (req, res) => {
   try {
      const { orderID } = req.body
      const [isValid, isValidError] = await checkValidOrder(orderID)
      if (isValidError) throw isValidError
      return res.status(200).json({})
   } catch (error) {
      return res.status(400).json({ message: error })
   }
};

export default handler;