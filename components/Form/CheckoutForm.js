import React, { useState, useEffect, useContext } from "react";
import axios from 'axios'
import { cart } from '../../utils/cart'

import OrderSummary from './OrderSummary'
import Email from './Email'
import Address from './Address'
import Payment from './Payment'

const CheckoutForm = () => {
   // get cart items
   const { cartItems } = useContext(cart)

   // Keep track of form steps
   const [step, setStep] = useState(1)
   const [error, setError] = useState(null)
   const [data, setData] = useState({
      clientSecret: '',
      orderID: '',
      email: '',
      address: {},
      items: cartItems
   })

   // Create payment and order intent and set client secret and orderID
   useEffect(() => {
      if (cartItems.length === 0) return
      axios.post('/api/create-order-intent', { items: cartItems })
         .then(res => {
            setData({
               ...data,
               clientSecret: res.data.clientSecret,
               orderID: res.data.orderID
            })
            return res.data.orderID
         })
         .then(orderID => {
            axios.post('/api/add-order-images', { orderID, items: cartItems })
         })
         .catch(error => setError(error.response.data.message))
   }, [cartItems])

   // Go to next step
   const nextStep = (formData) => {
      setStep(step + 1)
      setData({ ...data, ...formData })
   }

   const updateOrder = (formData) => {
      const payload = { orderID: data.orderID, address: { email: data.email, ...formData } }
      nextStep({ address: { ...formData } })
      axios.post('/api/add-order-address', payload)
         .then(res => {
            axios.post('/api/check-valid-order', { orderID: data.orderID })
         })
         .catch(error => setError(error.response.data.message))
   }

   return (
      <>
         {error &&
            <div className="flex justify-between items-baseline sm:items-center bg-red-400 py-2 px-3 rounded text-red-900 mt-4 mx-4 sm:mx-8 lg:w-3/4 lg:mx-auto" role="alert">
               {error}
               <div onClick={() => setError(null)} className="cursor-pointer">
                  <svg className="h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001"><path d="M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z" /></svg>
               </div>
            </div>
         }

         <div className="mt-4 px-4 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:px-8 lg:w-9/12 lg:mx-auto lg:grid-cols-5">
            <div className="grid lg:col-span-3 gap-y-2">
               {/* Email */}
               <Email step={step} index={1} data={data.email} setStep={setStep} nextStep={nextStep} />
               <Address step={step} index={2} data={data.address} setStep={setStep} nextStep={updateOrder} />
               <Payment
                  step={step}
                  index={3}
                  data={data}
               />
            </div>

            <div className="lg:col-span-2 sm:sticky sm:h-0 sm:top-header">
               <OrderSummary />
            </div>
         </div>


      </>
   );
}

export default CheckoutForm