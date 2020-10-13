import { useContext } from 'react'
import { cart } from '../utils/cart'

const CartTotal = ({ children }) => {
   const { cartItems } = useContext(cart)

   return (
      <div className="bg-theme-grey-900 sm:bg-transparent fixed left-0 px-4 sm:sticky w-full bottom-0 pt-2 pb-4 border-t border-theme-grey-800">
         <div className="flex align-center justify-between text-lg w-full">
            <span>Total</span>
            <span>
               ${cartItems.reduce(
               (sum, product) => sum + product.price * product.cartQuantity, 0)
               }
            </span>
         </div>
         {children}
      </div>
   );
}

export default CartTotal;