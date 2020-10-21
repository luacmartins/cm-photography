import fetchApi from './axiosConfig'

// Adds images to an order
const submitOrder = (orderID) => fetchApi
   .post(`/orders/${orderID}/status`, { status: 'Submitted' })
   .then(res => {
      if (res.data.statusCode !== 200) return [undefined, 'We were unable to place your order.']
      return [true, undefined]
   })
   .catch(error => Promise.resolve([undefined, error.message]))


export default submitOrder