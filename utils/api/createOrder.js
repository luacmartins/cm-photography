import fetchApi from './axiosConfig'

// Creates order and returns Order ID that is used to add images to the order
const createOrder = (orderData) => fetchApi
   .post('/orders', { recipientName: '', countryCode: 'US', preferredShippingMethod: 'Standard' })
   .then(res => {
      if (!res.data.data.id) return [undefined, 'Oops, there was an error initializing your order. Please refresh the page to try again.']
      return [res.data.data.id, undefined]
   })
   .catch(error => Promise.resolve([undefined, 'Oops, there was an error initializing your order. Please refresh the page to try again.']))

export default createOrder