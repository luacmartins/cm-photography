import fetchApi from './axiosConfig'

// Creates order and returns Order ID that is used to add images to the order
const checkValidOrder = (orderID) => fetchApi
   .get(`/orders/${orderID}/SubmissionStatus`)
   .then(res => {
      if (!res.data.data.isValid) return [undefined, res.data.data.generalErrors]
      if (res.data.data.photos.some(image => image.errors.length > 0)) return [undefined, 'Some images in your order have errors.']
      return [true, undefined]
   }).catch(error => Promise.resolve([undefined, error.message]))

export default checkValidOrder