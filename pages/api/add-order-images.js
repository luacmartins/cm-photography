import addImages from '../../utils/api/addImages'

const handler = async (req, res) => {
   try {
      const { orderID, items } = req.body
      const [imagesOK, imagesError] = await addImages(orderID, items)
      if (imagesError) throw imagesError
      return res.status(200).json({})
   } catch (error) {
      return res.status(400).json({ message: error })
   }
};

export default handler;