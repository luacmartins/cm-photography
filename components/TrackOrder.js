import CartCard from './CartCard'

const TrackOrder = ({ order, isFetching }) => {
   return (
      <div className="bg-theme-grey-600 rounded-lg p-3 sm:p-4 ">
         <div className="md:flex sm:justify-between">
            <div className="flex flex-col md:w-40 lg:w-56">
               <div className="flex justify-between md:flex-col">
                  <div className="flex flex-col">
                     <header className="font-semibold">Confirmation #</header>
                     {isFetching ?
                        <div className="bg-theme-grey-400 animate-pulse w-32 h-5 mt-1 rounded"></div>
                        :
                        <span className="font-thin text-theme-grey-400">{order.id}</span>
                     }
                  </div>
                  <div className="flex flex-col text-right md:text-left md:mt-2">
                     <header className="font-semibold">Order Date</header>
                     {isFetching ?
                        <div className="bg-theme-grey-400 animate-pulse w-24 h-5 mt-1 rounded"></div>
                        :
                        <span className="font-thin text-theme-grey-400">{order.date}</span>
                     }
                  </div>
               </div>
               <div className="flex justify-between mt-4 md:flex-col md:mt-0">
                  <div className="flex flex-col md:col-span-1 md:mt-2">
                     <header className="font-semibold">Tracking #</header>
                     <div>
                        {order.tracking && order.tracking.length > 0 ? order.tracking.map(tracking =>
                           <a key={tracking.url} href={tracking.url} className="block font-thin text-blue-300 underline" target="_blank">{tracking.number}</a>
                        )
                           :
                           isFetching ?
                              <div className="bg-theme-grey-400 animate-pulse w-24 sm:w-48 md:w-2/3 h-5 mt-1 rounded"></div>
                              :
                              <span className="font-thin text-theme-grey-400">Not available yet</span>
                        }
                     </div>
                  </div>
                  <div className="flex flex-col text-right items-end md:col-span-1 md:text-left md:items-start md:mt-2">
                     <header className="font-semibold">Estimated Delivery</header>
                     {isFetching ?
                        <div className="bg-theme-grey-400 animate-pulse w-3/5 h-5 mt-1 rounded"></div>
                        :
                        <span className="font-thin text-theme-grey-400">{order.delivery ? order.delivery : 'Not yet available'}</span>
                     }
                  </div>
               </div>
               <div className="flex justify-between mt-4 md:flex-col md:mt-0">
                  <div className="flex flex-col md:mt-2">
                     <header className="font-semibold">Order Total</header>
                     {isFetching ?
                        <div className="bg-theme-grey-400 animate-pulse w-12 h-5 mt-1 rounded"></div>
                        :
                        order && <span className="font-thin text-theme-grey-400">${order.items.reduce((acc, item) => { return acc += item.price * item.cartQuantity }, 0)}</span>
                     }
                  </div>
               </div>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2 lg:w-1/2">
               <header className="font-semibold md:mx-2 lg:text-lg">Items</header>
               {isFetching ?
                  <div className="w-full">
                     {[1, 2].map((item) =>
                        <div key={item} className="md:mx-2 flex py-2">
                           <div className="bg-theme-grey-400 animate-pulse w-12 h-12 rounded"></div>
                           <div className="flex-1">
                              <div className="flex justify-between">
                                 <div className="bg-theme-grey-400 animate-pulse w-3/5 md:w-3/5 h-5 rounded ml-2"></div>
                                 <div className="bg-theme-grey-400 animate-pulse w-12 md:w-10 h-5 rounded ml-2"></div>
                              </div>
                              <div className="bg-theme-grey-400 animate-pulse w-2/5 md:w-2/5 h-5 mt-2 rounded ml-2"></div>
                           </div>
                        </div>
                     )}
                  </div>
                  :
                  order && order.items.map((item) =>
                     <CartCard key={item.id} product={item} removeButton={false} bg={false} disabled={true} />
                  )
               }
            </div>
         </div>
      </div>
   );
}

export default TrackOrder;