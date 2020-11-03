import CartList from '../CartList'
import CartTotal from '../CartTotal'

export default function OrderSummary() {
   return (
      <div className="sm:bg-theme-grey-600 sm:rounded-lg overflow-hidden">
         <h1 className="mt-2 text-white font-semibold sm:border-b border-theme-grey-800 pt-2 sm:pt-0 sm:px-4 mb-2 sm:pb-2">Order Summary</h1>
         <CartList removeButton={false} bg={false} disabled={true} />
         <CartTotal />
      </div>
   )
}