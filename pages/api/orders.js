import createOrder from '../../utils/api/createOrder'
import addImages from '../../utils/api/addImages'
import checkValidOrder from '../../utils/api/checkValidOrder'
import submitOrder from '../../utils/api/submitOrder'

const handler = async (req, res) => {
   try {
      // Validate address data


      // Create new Order ID
      const [orderID, orderCreationError] = await createOrder(req.body.address)
      if (orderCreationError) throw orderCreationError

      // Attach images to Order ID
      const [imagesOK, imagesError] = await addImages(orderID, req.body.items)
      if (imagesError) throw imagesError

      // Check if Order is valid
      const [isOrderValid, validationError] = await checkValidOrder(orderID)
      if (validationError) throw validationError

      // Process payment here

      // Submit Order
      const [isOrderSubmitted, submissionError] = await submitOrder(orderID)
      if (submissionError) throw submissionError

      return res.json({ orderID });
   } catch (error) {
      console.log(error)
      return res.json({ errorMessage: error })
   }
};

export default handler;