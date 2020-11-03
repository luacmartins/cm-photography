import addAddress from '../../utils/api/addAddress'

const handler = async (req, res) => {
   try {
      const { orderID, address } = req.body
      const [addressOK, addressError] = await addAddress(orderID, address)
      if (addressError) throw addressError
      return res.status(200).json({})
   } catch (error) {
      return res.status(400).json({ message: error })
   }
};

export default handler;