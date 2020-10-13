import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { cart } from '../utils/cart'
import CartList from './CartList'
import CartTotal from './CartTotal'
import PopupMessage from './PopupMessage'

export default function OrderSummary({ data, disabled }) {
   const { cartItems, dispatch } = useContext(cart)
   const [isErrorOpen, setIsErrorOpen] = useState(false)
   const router = useRouter()

   const openError = () => {
      setIsErrorOpen(true)
      setTimeout(() => {
         setIsErrorOpen(false)
      }, 3500)
   }
   const handleSubmit = () => {
      //post data do API
      console.log({
         ...data,
         items: cartItems
      })

      //if error
      // openError()

      //if success
      router.push('checkout/success?confirmation=123231') //add order ID as query string to success page
      dispatch({ type: 'EMPTY' })
   }

   return (
      <>
         <div className="sm:bg-theme-grey-600 sm:rounded-lg overflow-hidden">
            <h1 className="mt-2 text-white font-semibold sm:border-b border-theme-grey-800 pt-2 sm:pt-0 sm:px-4 mb-2 sm:pb-2">Order Summary</h1>

            <CartList removeButton={false} bg={false} disabled={true} />

            <CartTotal>
               <button onClick={handleSubmit} className="mt-2 btn-primary w-full" disabled={disabled || cartItems.length < 1}>Purchase</button>
            </CartTotal>
         </div>
         {isErrorOpen && <PopupMessage message={'There was a problem with your payment. Please review your payment information and try again!'} />}
      </>
   )
}