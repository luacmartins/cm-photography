import fetchApi from './axiosConfig'

// Creates order and returns Order ID that is used to add images to the order
const addAddress = (orderID, address) => fetchApi
   .put(`/orders/${orderID}`, { ...address, countryCode: 'US', preferredShippingMethod: 'Standard' })
   .then(res => {
      return [true, undefined]
   })
   .catch(error => Promise.resolve([undefined, 'Oops, there was a problem with your address. Please make sure that it is correct and try again.']))

export default addAddress