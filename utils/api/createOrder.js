import fetchApi from './axiosConfig'

// Creates order and returns Order ID that is used to add images to the order
const createOrder = (orderData) => fetchApi
   .post('/orders', { ...orderData })
   .then(res => {
      if (!res.data.data.id) return [undefined, 'We were not able to create your order.']
      return [res.data.data.id, undefined]
   })
   .catch(error => Promise.resolve([undefined, 'Order could not be created']))

export default createOrder