import { useForm } from 'react-hook-form'
import { useState } from 'react'
import FormInput from '../../components/FormInput'
import Main from '../../components/Main'
import PageTitle from '../../components/PageTitle'
import TrackOrder from '../../components/TrackOrder'
import axios from 'axios'

export default function TrackOrderPage() {
   const { register, handleSubmit, errors } = useForm()
   const [order, setOrder] = useState('')
   const [error, setError] = useState('')
   const [isFetching, setIsFetching] = useState(false)

   const onSubmit = (formData) => {
      setIsFetching(true)
      setError('')
      axios.get(`/api/track?orderID=${formData.orderID}`).then(res => {
         res.data.error ? setError(res.data.error) : setOrder(res.data.details)
         setIsFetching(false)
      })
   }

   const message = order ? '' : 'Please enter the information below to track your order.'

   return (
      <Main title={'Track Order'} >
         <div className="px-2 sm:px-4 lg:px-8 mt-8 lg:mt-16 lg:mb-24">
            <PageTitle
               title={'Track Order'}
               subtitle={message}
            />

            <div className="mt-4 mx-2 sm:w-1/2 sm:mx-auto lg:my-6 lg:w-1/3">
               <form onSubmit={handleSubmit(onSubmit)} className="bg-theme-grey-600 rounded-lg p-4" noValidate>
                  <FormInput
                     name='orderID'
                     placeholder='Confirmation #'
                     error={errors.confirmation}
                     defaultValue={''}
                     register={register({
                        required: 'Please fill in the tracking number.',
                        pattern: {
                           value: /\d+/,
                           message: 'Invalid tracking number.'
                        }
                     })}
                  />
                  <button className={`${isFetching ? 'animate-pulse' : ''} btn-primary cursor-pointer mt-2 w-full lg:mt-4 h-10`} type="submit">
                     {isFetching ? 'Processing...' : 'Track Order'}
                  </button>
               </form>
            </div>
            {error && <div className="mx-2 mt-4 sm:w-1/2 sm:mx-auto text-red-700">Sorry! We could not find your order. Please check the confirmation number and try again.</div>}
            {order && <div className="mx-2 mt-8 lg:mt-12 sm:w-1/2 sm:mx-auto">
               <TrackOrder order={order} />
            </div>}
         </div>
      </Main>
   )
}