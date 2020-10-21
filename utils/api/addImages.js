import fetchApi from './axiosConfig'

const getItems = (cartItems) => cartItems.map(item => {
   const material = item.options.material === 'Canvas' ? 'CAN' : item.options.material === 'Print' ? 'PAP' : ''
   const size = item.options.size.toUpperCase().slice(0, -1)
   const sku = `GLOBAL-${material}-${size}`

   return ({
      sku,
      url: `https://luacmartins-photography.herokuapp.com/img/product-${item.id}-1.jpg`,
      copies: item.cartQuantity,
      sizing: 'Crop'
   })
})

// Adds images to an order
const addImages = (orderID, cartItems) => {
   const items = getItems(cartItems)

   return fetchApi
      .post(`/orders/${orderID}/images/batch`, items)
      .then(res => {
         const error = res.data.data.items.some(image => image.status !== 'NotYetDownloaded')
         if (error) return [undefined, 'We had issues attaching images to your order']
         return [true, undefined]
      })
      .catch(error => Promise.resolve([undefined, error.message]))
}


export default addImages