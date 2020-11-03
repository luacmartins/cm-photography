import { useState } from 'react'
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from 'axios'
import { useRouter } from 'next/router'

const Payment = ({ step, index, data }) => {
   const [succeeded, setSucceeded] = useState(false)
   const [error, setError] = useState(null)
   const [cardError, setCardError] = useState(true)
   const [expiryError, setExpiryError] = useState(true)
   const [cvcError, setCvcError] = useState(true)
   const [zip, setZip] = useState('')
   const [processing, setProcessing] = useState('')
   const [cardDisabled, setCardDisabled] = useState(true)
   const [expiryDisabled, setExpiryDisabled] = useState(true)
   const [cvcDisabled, setCvcDisabled] = useState(true)
   const [zipDisabled, setZipDisabled] = useState(true)

   // Setup stripe elements and router
   const stripe = useStripe()
   const elements = useElements()
   const router = useRouter()

   const handleCardChange = async (event) => {
      // Listen for changes in the CardElement
      // and display any errors as the customer types their card details
      setCardDisabled(!event.complete)
      setCardError(event.error ? event.error.message : "")
   }

   const handleExpiryChange = async (event) => {
      setExpiryDisabled(!event.complete)
      setExpiryError(event.error ? event.error.message : "")
   }

   const handleCvcChange = async (event) => {
      setCvcDisabled(!event.complete)
      setCvcError(event.error ? event.error.message : "")
   }

   const handleZipChange = async (event) => {
      const newZip = event.target.value
      if (newZip.length === 6) return
      const zipPattern = /(^\d{5}$)|(^\d{5}-\d{4}$)/
      setZip(event.target.value)
      setZipDisabled(!zipPattern.test(newZip))
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      setProcessing(true)
      const payload = await stripe.confirmCardPayment(data.clientSecret, {
         receipt_email: data.email,
         payment_method: {
            card: elements.getElement(CardNumberElement)
         }
      })

      if (payload.error) {
         setError(`Payment failed. ${payload.error.message}`)
         setProcessing(false)
      } else {
         setError(null)
         setProcessing(false)
         setSucceeded(true)
         axios.post('/api/submit-order', { orderID: data.orderID, data })
            .then(res => {
               router.push(`checkout/success?order=${data.orderID}`)
            })
            .catch(error => setError(error.response.data.message))
      }
   }

   // Form styles
   const cardStyle = {
      style: {
         base: {
            color: "#ffffff",
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            iconColor: '#ffffff',
            lineHeight: '24px',
            fontWeight: '400',
            fontSize: '16px',
            "::placeholder": {
               opacity: '25%'
            },
         },
         invalid: {
            color: "#e53e3e",
            border: '1px solid #e53e3e',
            iconColor: "#e53e3e"
         },
      }
   }

   return (
      <>
         <div className="bg-theme-grey-600 rounded-lg p-4 lg:col-span-3">
            <h1 className={`${step !== index ? 'opacity-50' : ''} text-xl font-semibold`}>3. Payment</h1>
            {step === index && <div>
               <form id="payment-form" className="mt-4" onSubmit={handleSubmit}>
                  <div className="xl:flex xl:gap-2">
                     <CardNumberElement onChange={handleCardChange} options={cardStyle} className="bg-theme-grey-800 py-2 px-2 rounded w-full lg:w-auto lg:flex-1 focus:outline-none" />
                     {cardError && <div className="xl:hidden text-red-600 text-xs mt-2 leading-snug" role="alert">{cardError}</div>}
                     <div className="flex mt-2 gap-2 xl:mt-0">
                        <CardExpiryElement onChange={handleExpiryChange} options={cardStyle} className="bg-theme-grey-800 py-2 px-2 rounded flex-1 focus:outline-none lg:w-20" />
                        <CardCvcElement onChange={handleCvcChange} options={cardStyle} className="bg-theme-grey-800 py-2 px-2 rounded flex-1 focus:outline-none lg:w-20" />
                        <input value={zip} onChange={handleZipChange} type="number" name="ZIP" className="StripeElement" required placeholder="ZIP" className="bg-theme-grey-800 py-2 px-2 rounded placeholder-white placeholder-opacity-25 w-20 sm:w-1/3 xl:w-32 border border-theme-grey-800 focus:outline-none focus:border-white" />
                     </div>
                     {expiryError && <div className="xl:hidden text-red-600 text-xs mt-2 leading-snug" role="alert">{expiryError}</div>}
                     {cvcError && <div className="xl:hidden text-red-600 text-xs mt-2 leading-snug" role="alert">{cvcError}</div>}
                  </div>
                  <div className="hidden xl:block mt-2">
                     {cardError && <div className="text-red-600 text-xs leading-snug" role="alert">{cardError}</div>}
                     {expiryError && <div className="text-red-600 text-xs leading-snug" role="alert">{expiryError}</div>}
                     {cvcError && <div className="text-red-600 text-xs leading-snug" role="alert">{cvcError}</div>}
                  </div>
                  <button
                     id="submit"
                     className={`${processing || succeeded ? 'animate-pulse disabled:opacity-100' : ''} btn-primary mt-4 uppercase w-full`}
                     disabled={processing || cardDisabled || expiryDisabled || cvcDisabled || succeeded || cardError || expiryError || cvcError || zipDisabled}
                  >
                     {processing || succeeded ? 'Processing...' : 'Purchase'}
                  </button>
               </form>
            </div>}
         </div>

         {error && <div className="flex justify-between items-baseline bg-red-400 py-2 px-3 rounded text-red-900 lg:col-span-3 mt-2 leading-snug" role="alert">
            {error}
            <div onClick={() => setError(null)} className="cursor-pointer">
               <svg className="h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001"><path d="M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z" /></svg>
            </div>
         </div>}
      </>
   );
}

export default Payment;

