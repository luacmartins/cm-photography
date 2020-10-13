import { useForm } from 'react-hook-form'
import { useState } from 'react'
import FormInput from '../../components/FormInput'
import Main from '../../components/Main'
import PageTitle from '../../components/PageTitle'
import TrackOrder from '../../components/TrackOrder'

const orderDetails = {
   id: '123123-13',
   date: '09/08/2020',
   delivery: '20/08/2020',
   isCancelable: true,
   cancelled: false,
   total: 207,
   card: '1234',
   items: [{
      id: 1,
      title: 'Waterfalls of Plitvice',
      image: {
         src: '/img/product-1.jpg',
         alt: 'product 1'
      },
      options: {
         size: '10x12"',
         material: 'Canvas'
      },
      cartQuantity: 2,
      price: 69
   }, {
      id: 2,
      title: 'Canyons of Brazil',
      image: {
         src: '/img/product-2.jpg',
         alt: 'product 2'
      },
      options: {
         size: '12x14"',
         material: 'Paper'
      },
      cartQuantity: 1,
      price: 39
   }]
}

export default function TrackOrderPage() {
   const { register, handleSubmit, errors } = useForm()
   const [order, setOrder] = useState('')
   const [confirmMessage, setConfirmMessage] = useState(false)

   const onSubmit = (formData) => {
      console.log('fetch API with formData here', formData)
      //set order state with response
      setOrder(orderDetails)
   }

   const handleCancellation = () => {
      console.log('order cancelled')
   }


   const message = order ? '' : 'Please enter the information below to track your order.'

   return (
      <Main title={'Track Order'} >
         <div className="px-2 sm:px-4 lg:px-8 mt-8 lg:mt-16 lg:mb-24">
            <PageTitle
               title={'Track Order'}
               subtitle={message}
            />

            {!order && <div className="mt-4 mx-2 sm:w-1/2 sm:mx-auto lg:my-6 lg:w-1/3">
               <form onSubmit={handleSubmit(onSubmit)} className="bg-theme-grey-600 rounded-lg p-4" noValidate>
                  <FormInput
                     name='confirmation'
                     placeholder='Tracking #'
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
                  <div className="mt-2">
                     <FormInput
                        name='email'
                        placeholder='Email'
                        error={errors.email}
                        defaultValue={''}
                        register={register({
                           required: 'Please provide the email address.',
                           pattern: {
                              value: /^(([^ <>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: 'Invalid email address.'
                           }
                        })}
                     />
                  </div>
                  <input className="btn-primary cursor-pointer mt-2 w-full lg:mt-4" type="submit" value="Track Order" />
               </form>
            </div>}

            {order && <div className="mx-2 mt-12 sm:w-1/2 sm:mx-auto">
               <TrackOrder order={orderDetails} />
               {orderDetails.isCancelable && !confirmMessage && <button onClick={() => setConfirmMessage(true)} className="border border-red-600 text-red-600 text-sm rounded-lg py-1 px-2 mt-4 hover:opacity-75 text-thin">Cancel Order</button>}
               {confirmMessage && <div className="mt-2 sm:mt-3">
                  <span className="">Confirm cancellation?</span>
                  <div className="mt-2 flex justify-between lg:justify-start">
                     <button onClick={() => setConfirmMessage(false)} className="text-white border border-white rounded-lg px-2 py-1 w-2/5 lg:w-32 hover:opacity-75">No</button>
                     <button onClick={handleCancellation} className="ml-4 text-red-600 border border-red-600 py-1 px-2 rounded-lg cursor-pointer w-2/5 lg:w-32 hover:opacity-75">Yes</button>

                  </div>
               </div>}
               {!orderDetails.isCancelable && !orderDetails.cancelled && <p className="text-xs text-theme-grey-400 mt-4">Your order has left our facilities and can't be cancelled anymore.</p>}
            </div>}
         </div>
      </Main>
   )
}