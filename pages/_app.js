import '../styles/index.css'
import { CartProvider } from '../utils/cart'

function MyApp({ Component, pageProps }) {
   return (
      <CartProvider>
         <Component {...pageProps} />
      </CartProvider>
   )
}

export default MyApp
