import moment from 'moment'
import options from '../../products/options'
import getOrder from '../../utils/api/getOrder'
import { products } from '../../products/products'

const handler = async (req, res) => {
   try {
      // Get Order
      const [orderDetails, orderError] = await getOrder(req.query.orderID)
      if (orderError) return res.send({ error: 'Sorry! We could not find your order. Please check the confirmation number and try again.' })

      const shipments = orderDetails.shippingInfo.shipments
      let delivery
      let tracking

      if (shipments.length > 0) {
         delivery = shipments[0].latestEstimatedArrivalDate
         shipments.forEach(shipment => {
            if (shipment.isTracked) {
               tracking.push({ number: shipment.trackingNumber, url: shipment.trackingUrl })
            }
            if (shipment.latestEstimatedArrivalDate > delivery) {
               delivery = shipment.latestEstimatedArrivalDate
            }
         })
      }

      // return order object
      const details = {
         id: orderDetails.id,
         date: moment(orderDetails.created).format('MMM DD, YYYY'),
         delivery: moment(delivery).format('ddd, MMM DD'),
         tracking,
         items: orderDetails.images.map(item => {
            const title = products.filter(product => product.id.toString() === item.url.match(/-(\d+)-/)[1])[0].title
            const material = item.sku.split('-')[1] === 'CAN' ? 'Canvas' : 'Print'
            const size = item.sku.split('-')[2].toLowerCase() + '"'
            return ({
               id: item.id,
               title,
               image: {
                  src: item.thumbnailUrl,
                  alt: ''
               },
               options: {
                  material,
                  size
               },
               price: options.prices.list[material][size],
               cartQuantity: item.copies
            })
         })
      }
      return res.send({ details });
   } catch (error) {
      return res.send({ errorMessage: error })
   }
};

export default handler;