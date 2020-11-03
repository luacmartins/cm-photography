import { useContext } from 'react'
import { cart } from '../utils/cart'
import Link from 'next/link'
import CartList from './CartList'
import CartTotal from './CartTotal'

export default function CartDropdown({ isCartOpen, toggleCart }) {
   const { cartItems } = useContext(cart)

   return (
      <div className="flex items-center w-8 sm:relative justify-end">

         {/* Cart Toggle Button */}
         <button className="flex" onClick={toggleCart}>
            {!isCartOpen && <div className="flex">
               <svg className="h-6 sm:hidden fill-current" viewBox="0 0 512.003 512.003" xmlns="http://www.w3.org/2000/svg"><g><path d="m503.995 105.373c-6.868-8.498-17.076-13.371-28.004-13.371h-390.254l-3.485-24.976c-2.468-17.686-17.796-31.024-35.655-31.024h-30.597c-8.836 0-16 7.164-16 16s7.164 16 16 16h30.597c1.984 0 3.688 1.482 3.961 3.447l43.189 309.529c2.468 17.687 17.796 31.024 35.655 31.024h17.349c-1.776 5.008-2.752 10.391-2.752 16 0 26.467 21.533 48 48 48s48-21.533 48-48c0-5.609-.976-10.992-2.752-16h85.504c-1.776 5.008-2.752 10.391-2.752 16 0 26.467 21.533 48 48 48s48-21.533 48-48c0-5.609-.976-10.992-2.752-16h34.753c8.836 0 16-7.164 16-16s-7.164-16-16-16h-318.597c-1.984 0-3.688-1.482-3.961-3.447l-3.984-28.553h315.102c16.858 0 31.663-11.965 35.205-28.458l39.429-183.997c2.291-10.681-.333-21.679-7.199-30.174zm-295.995 322.629c0 8.822-7.178 16-16 16s-16-7.178-16-16 7.178-16 16-16 16 7.177 16 16zm176 0c0 8.822-7.178 16-16 16s-16-7.178-16-16 7.178-16 16-16 16 7.177 16 16zm95.905-299.163-39.428 183.993c-.394 1.836-2.042 3.169-3.917 3.169h-319.568l-26.79-192h385.788c1.583 0 2.569.808 3.117 1.486.547.677 1.129 1.808.798 3.352z" /></g></svg>
               <div className="sm:hidden text-xs ml-1 sm:z-10">{cartItems.length}</div>
            </div>}
            {isCartOpen && <div>
               <svg className="h-4 sm:hidden m-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001"><path d="M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z" /></svg>
            </div>}
            <svg className="sm:relative hidden sm:flex h-6 fill-current sm:z-10" viewBox="0 0 512.003 512.003" xmlns="http://www.w3.org/2000/svg"><g><path d="m503.995 105.373c-6.868-8.498-17.076-13.371-28.004-13.371h-390.254l-3.485-24.976c-2.468-17.686-17.796-31.024-35.655-31.024h-30.597c-8.836 0-16 7.164-16 16s7.164 16 16 16h30.597c1.984 0 3.688 1.482 3.961 3.447l43.189 309.529c2.468 17.687 17.796 31.024 35.655 31.024h17.349c-1.776 5.008-2.752 10.391-2.752 16 0 26.467 21.533 48 48 48s48-21.533 48-48c0-5.609-.976-10.992-2.752-16h85.504c-1.776 5.008-2.752 10.391-2.752 16 0 26.467 21.533 48 48 48s48-21.533 48-48c0-5.609-.976-10.992-2.752-16h34.753c8.836 0 16-7.164 16-16s-7.164-16-16-16h-318.597c-1.984 0-3.688-1.482-3.961-3.447l-3.984-28.553h315.102c16.858 0 31.663-11.965 35.205-28.458l39.429-183.997c2.291-10.681-.333-21.679-7.199-30.174zm-295.995 322.629c0 8.822-7.178 16-16 16s-16-7.178-16-16 7.178-16 16-16 16 7.177 16 16zm176 0c0 8.822-7.178 16-16 16s-16-7.178-16-16 7.178-16 16-16 16 7.177 16 16zm95.905-299.163-39.428 183.993c-.394 1.836-2.042 3.169-3.917 3.169h-319.568l-26.79-192h385.788c1.583 0 2.569.808 3.117 1.486.547.677 1.129 1.808.798 3.352z" /></g></svg>
            <span className="hidden sm:flex text-xs ml-1 sm:z-10 leading-3">{cartItems.length}</span>
         </button>

         {/* Cart body */}
         <div className={`${isCartOpen ? 'flex' : 'hidden'} flex-col bg-theme-grey-900 overflow-y-scroll border-t border-theme-grey-800 text-white absolute mt-20 sm:mt-8 inset-0 sm:inset-auto sm:top-0 sm:right-0  sm:w-96 sm:max-h-96 lg:max-h-128 sm:rounded-lg z-10`}>

            {/* Cart Header */}
            <div className="hidden sm:flex sticky bg-theme-grey-900 top-0 px-2 sm:px-4 py-2 border-b border-theme-grey-800 justify-between">
               <span>Cart</span>
               <button onClick={toggleCart}>
                  <svg className="h-3 m-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001"><path d="M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z" /></svg>
               </button>
            </div>

            {/* Cart List */}
            <div className="px-4 sm:overflow-y-hidden sm:px-0 sm:flex-1 sm:flex">
               <CartList />
            </div>

            {/* Subtotal */}
            <CartTotal>
               <Link href="/checkout">
                  <a>
                     <button className="btn-primary block my-2 w-full" disabled={cartItems.length < 1}>Checkout</button>
                  </a>
               </Link>
            </CartTotal>
         </div>

         {/* Background overlay to close cart */}
         <button onClick={() => toggleCart()} className={`${isCartOpen ? 'flex' : 'hidden'} fixed inset-0 bg-theme-grey-900 sm:bg-theme-grey-400 h-full w-full sm:opacity-75 -z-10 sm:z-0`}></button>
      </div>
   )
}
