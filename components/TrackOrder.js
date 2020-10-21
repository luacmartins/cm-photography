import CartCard from './CartCard'

const TrackOrder = ({ order }) => {
   return (
      <div className="bg-theme-grey-600 rounded-lg p-3 sm:p-4 ">
         <div className="sm:flex sm:justify-between">
            <div className="flex flex-col sm:w-40 lg:w-56">
               <div className="flex justify-between sm:flex-col">
                  <div className="flex flex-col">
                     <header className="font-semibold">Confirmation #</header>
                     <span className="font-thin text-theme-grey-400">{order.id}</span>
                  </div>
                  <div className="flex flex-col text-right sm:text-left sm:mt-2">
                     <header className="font-semibold">Order Date</header>
                     <span className="font-thin text-theme-grey-400">{order.date}</span>
                  </div>
               </div>
               <div className="flex justify-between mt-4 sm:flex-col sm:mt-0">
                  <div className="flex flex-col sm:col-span-1 sm:mt-2">
                     <header className="font-semibold">Tracking #</header>
                     <div>
                        {order.tracking && order.tracking.length > 0 ? order.tracking.map(tracking =>
                           <a key={tracking.url} href={tracking.url} className="block font-thin text-blue-300 underline" target="_blank">{tracking.number}</a>
                        )
                           :
                           <span className="font-thin text-theme-grey-400">Not available yet</span>}
                     </div>
                  </div>
                  <div className="flex flex-col text-right sm:col-span-1 sm:text-left sm:mt-2">
                     <header className="font-semibold">Estimated Delivery</header>
                     <span className="font-thin text-theme-grey-400">{order.delivery ? order.delivery : 'Not yet available'}</span>
                  </div>
               </div>
               <div className="flex justify-between mt-4 sm:flex-col sm:mt-0">
                  <div className="flex flex-col sm:mt-2">
                     <header className="font-semibold">Order Total</header>
                     <span className="font-thin text-theme-grey-400">${order.items.reduce((acc, item) => { return acc += item.price * item.cartQuantity }, 0)}</span>
                  </div>
               </div>
            </div>
            <div className="mt-6 sm:mt-0 lg:w-1/2">
               <header className="font-semibold sm:mx-2 lg:text-lg">Items</header>
               {order.items.map((item) =>
                  <CartCard key={item.id} product={item} removeButton={false} bg={false} disabled={true} />
               )}
            </div>
         </div>
      </div>
   );
}

export default TrackOrder;