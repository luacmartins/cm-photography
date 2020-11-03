import { useContext, useEffect } from 'react'
import Router from 'next/router'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Main from '../../components/Main'
import CheckoutForm from '../../components/Form/CheckoutForm'
import { cart } from '../../utils/cart'

// the key below is publishable!
const promise = loadStripe("pk_test_51HhL2hBrcBIXwrBwNGLsOEpaUazM09w7XYphQDjaogafrAn2yYLlCXYiGrdb1g7Rl2lVW3kq9WSYPLzqXdNFXEEC00jjAat3oI");

export default function CheckoutPage() {
   const { cartItems } = useContext(cart)

   useEffect(() => {
      if (cartItems.length < 1) {
         Router.push('/portfolio-shop')
      }
   }, [cartItems])

   return (
      <Main title={'Checkout'}>
         <Elements stripe={promise}>
            <CheckoutForm />
         </Elements>
      </Main>
   )
}