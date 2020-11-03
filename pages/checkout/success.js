import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { cart } from '../../utils/cart'
import Main from '../../components/Main'
import PageTitle from '../../components/PageTitle'
import TrackOrder from '../../components/TrackOrder'

export default function SuccessPage() {
   const orderID = useRouter().query.order
   const [orderDetails, setOrderDetails] = useState('')
   const [error, setError] = useState('')
   const [isFetching, setIsFetching] = useState(null)
   const { dispatch } = useContext(cart)

   useEffect(() => {
      dispatch({ type: 'EMPTY' })
      setIsFetching(true)
      axios.get(`/api/track-order?orderID=${orderID}`).then(res => {
         setOrderDetails(res.data.details)
         setIsFetching(false)
      }).catch(err => {
         setError({
            title: 'Sorry!',
            subtitle: err.response.data.message
         })
         setIsFetching(false)
      })
   }, [])

   let title = 'Thank You!'
   let subtitle = 'Your order was received and you should get a confirmation email shortly.'

   return (
      <Main title={'Success'} >
         <div className="px-1 sm:px-4 lg:px-8 mt-8 lg:mt-16">
            <PageTitle
               title={error ? error.title : title}
               subtitle={error ? error.subtitle : subtitle}
            />
            <div className="mt-8 mx-2 sm:w-2/3 sm:mx-auto lg:my-20 lg:w-1/2">
               <TrackOrder order={orderDetails} isFetching={isFetching} />
               <div className="mt-6">
                  <p className="font-thin leading-tight text-sm">
                     You can track your order at the <Link href="/checkout/track-order">
                        <a className="underline">Track Orders page</a>
                     </Link> in your cart.
                  </p>
               </div>
            </div>
         </div>
      </Main>
   )
}