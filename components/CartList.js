import { useContext } from 'react'
import { useRouter } from 'next/router'
import { cart } from '../utils/cart'
import CartCard from './CartCard'

const CartList = ({ removeButton, bg, disabled }) => {
   const { cartItems } = useContext(cart)
   const router = useRouter()

   const handleClick = () => {
      router.push('/checkout/track-order')
   }

   return (
      <div className="sm:px-0 sm:flex sm:flex-1 sm:overflow-y-hidden">
         <div className="flex flex-col flex-1 pb-4 mb-24 sm:mb-0 sm:max-h-96 sm:overflow-scroll sm:px-2">
            {cartItems.length === 0 && <div className="mt-8 text-center">Your cart is empty!</div>}
            {cartItems.length === 0 && <button onClick={handleClick} className="mt-12 text-center underline cursor-pointer">Track Orders</button>}
            {cartItems.length > 0 && cartItems.map((product, index) => (
               <CartCard key={index} id={index} product={product} removeButton={removeButton} bg={bg} disabled={disabled} />
            ))}
         </div>
      </div>
   );
}

export default CartList;