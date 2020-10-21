import fetchApi from './axiosConfig'

// Adds images to an order
const getOrder = (orderID) => fetchApi
   .get(`/orders/${orderID}`)
   .then(res => [res.data.data, undefined])
   .catch(error => Promise.resolve([undefined, error.message]))

export default getOrder