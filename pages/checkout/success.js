import Link from 'next/link'
import { useRouter } from 'next/router'
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


export default function SuccessPage() {
   const query = useRouter().query
   // fetch API with query string passed to page
   // const orderDetails = fetch(...)

   let title = 'Thank You!'
   let subtitle = 'Your order was received and you should get an email confirmation shortly. Below are your order details.'

   if (!orderDetails) {
      title = 'Sorry!'
      subtitle = 'It seems that something went wrong and we could not find your order. Please try again.'
   }

   return (
      <Main title={'Success'} >
         <div className="px-1 sm:px-4 lg:px-8 mt-8 lg:mt-16">
            <PageTitle
               title={title}
               subtitle={subtitle}
            />

            {orderDetails && <div className="mt-8 mx-2 sm:w-2/3 sm:mx-auto lg:my-20 lg:w-1/2">
               <TrackOrder order={orderDetails} />
               <div className="mt-6">
                  <p className="font-thin leading-tight text-sm">
                     You can track and manage your order at the <Link href="/checkout/track-order">
                        <a className="underline">Track Orders page</a>
                     </Link> in your cart.
                  </p>
               </div>
            </div>}
         </div>
      </Main>
   )
}