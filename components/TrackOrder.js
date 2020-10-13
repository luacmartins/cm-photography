import CartCard from './CartCard'

const TrackOrder = ({ order }) => {
   return (
      <div className="bg-theme-grey-600 rounded-lg p-3 sm:p-4 ">
         {order.cancelled && <div className="text-red-600 text-sm mb-4 sm:text-base">This order was cancelled on 20/12/2020. A full refund was issued on 20/12/20.</div>}
         <div className="sm:flex sm:justify-between">
            <div className="flex flex-col sm:w-40 lg:w-56">
               <div className="flex justify-between sm:flex-col">
                  <div className="flex flex-col lg:flex-row lg:items-baseline">
                     <header className="font-semibold">Confirmation #</header>
                     <span className="font-thin lg:ml-2 text-theme-grey-400">{order.id}</span>
                  </div>
                  <div className="flex flex-col text-right sm:text-left sm:mt-2 lg:mt-0 lg:flex-row lg:items-baseline">
                     <header className="font-semibold">Order Date</header>
                     <span className="font-thin lg:ml-2 text-theme-grey-400">{order.date}</span>
                  </div>
               </div>
               <div className="flex justify-between mt-4 sm:flex-col sm:mt-0">
                  <div className="flex flex-col sm:col-span-1 sm:mt-2 lg:mt-0 lg:flex-row lg:items-baseline">
                     <header className="font-semibold">Tracking #</header>
                     {!order.tracking && <span className="font-thin lg:ml-2 text-theme-grey-400">Not available yet</span>}
                     {order.tracking && <span className="font-thin lg:ml-2 text-theme-grey-400">{order.delivery}</span>}
                  </div>
                  <div className="flex flex-col text-right sm:col-span-1 sm:text-left sm:mt-2 lg:mt-0 lg:flex-row lg:items-baseline">
                     <header className="font-semibold">Deliver By</header>
                     <span className="font-thin lg:ml-2 text-theme-grey-400">{order.delivery}</span>
                  </div>
               </div>
               <div className="flex justify-between mt-4 sm:flex-col sm:mt-0">
                  <div className="flex flex-col sm:mt-2 lg:flex-row lg:mt-0 lg:items-baseline">
                     <header className="font-semibold">Order Total</header>
                     <span className="font-thin lg:ml-2 text-theme-grey-400">${order.total}</span>
                  </div>
                  <div className="flex flex-col text-right sm:text-left sm:mt-2 lg:mt-0 lg:flex-row lg:items-baseline">
                     <header className="font-semibold">Card Charged</header>
                     <span className="font-thin lg:ml-2 text-theme-grey-400">{order.card}</span>
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