import fetchApi from './axiosConfig'

const getCartItems = (cartItems) => cartItems.map(item => {
   const material = item.options.material === 'Canvas' ? 'CAN' : item.options.material === 'Print' ? 'PAP' : ''
   const size = item.options.size.toUpperCase().slice(0, -1)
   const sku = `GLOBAL-${material}-${size}`

   return ({
      sku,
      //change URL below to the actual full resolution image
      url: `https://luacmartins-photography.herokuapp.com/portfolio/product-${item.id}-desktop.jpg`,
      copies: item.cartQuantity,
      sizing: 'Crop'
   })
})

// Adds images to an order
const addImages = (orderID, cartItems) => {
   const items = getCartItems(cartItems)

   return fetchApi
      .post(`/orders/${orderID}/images/batch`, items)
      .then(res => {
         const error = res.data.data.items.some(image => image.status !== 'NotYetDownloaded')
         if (error) return [undefined, 'Oops, there was an error adding your images to your order. Please refresh the page to try again.']
         return [true, undefined]
      })
      .catch(error => Promise.resolve([undefined, 'Oops, there was an error adding your images to your order. Please refresh the page to try again.']))
}


export default addImages