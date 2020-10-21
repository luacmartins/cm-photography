import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Main from '../../components/Main'
import PageTitle from '../../components/PageTitle'
import TrackOrder from '../../components/TrackOrder'

export default function SuccessPage() {
   const orderID = useRouter().query.orderID
   const [orderDetails, setOrderDetails] = useState('')
   const [error, setError] = useState('')

   useEffect(() => {
      axios.get(`/api/track?orderID=${orderID}`).then(res => {
         setOrderDetails(res.data.details)
      }).catch(err => setError({
         title: 'Sorry!',
         subtitle: 'It seems that something went wrong and we could not find your order. Please try again.'
      }))
   }, [])

   let title = 'Thank You!'
   let subtitle = 'Your order was received and you should get an email confirmation shortly. Below are your order details.'

   return (
      <Main title={'Success'} >
         <div className="px-1 sm:px-4 lg:px-8 mt-8 lg:mt-16">
            <PageTitle
               title={error ? error.title : title}
               subtitle={error ? error.subtitle : subtitle}
            />

            {orderDetails && <div className="mt-8 mx-2 sm:w-2/3 sm:mx-auto lg:my-20 lg:w-1/2">
               <TrackOrder order={orderDetails} />
               <div className="mt-6">
                  <p className="font-thin leading-tight text-sm">
                     You can track your order at the <Link href="/checkout/track-order">
                        <a className="underline">Track Orders page</a>
                     </Link> in your cart.
                  </p>
               </div>
            </div>}
         </div>
      </Main>
   )
}