import { useState, useContext } from 'react'
import { cart } from '../utils/cart'
import SelectButtons from './SelectButtons'

const ProductInfo = ({ product }) => {
   const { dispatch } = useContext(cart)
   const [size, setSize] = useState()
   const [material, setMaterial] = useState()
   const [isMessageActive, setIsMessageActive] = useState(false)

   const toggleCartMessage = () => {
      setIsMessageActive(true)
      setTimeout(() => {
         setIsMessageActive(false)
      }, 1500)
   }

   const addToCart = () => {
      const item = {
         id: product.id,
         title: product.title,
         image: {
            src: product.images[0].src,
            alt: product.images[0].alt
         },
         options: {
            size,
            material,
         },
         cartQuantity: 1,
         price: 69
      }

      dispatch({
         type: 'ADD',
         item
      })

      toggleCartMessage()
   }

   return (
      <>
         {/* Title, description, labels */}
         <div className="sm:flex sm:justify-between lg:block">
            <h2 className="font-semibold text-lg leading-tight lg:text-2xl">{product.title}</h2>
            <span className="text-2xs  bg-white text-theme-grey-900 p-1 rounded">Free shipping</span>
         </div>
         <p className="mt-4 font-thin leading-tight">{product.description}</p>

         {/* Print size buttons */}
         <SelectButtons title={'Print Size'} content={product.sizes} name={'size'} option={size} setOption={setSize} />

         {/* Material buttons */}
         <SelectButtons title={'Material'} content={product.materials} name={'material'} option={material} setOption={setMaterial} />

         {/* Messages */}
         <div className="mt-6 sm:flex">
            <div className="flex items-center">
               <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M386.689 304.403c-35.587 0-64.538 28.951-64.538 64.538s28.951 64.538 64.538 64.538c35.593 0 64.538-28.951 64.538-64.538s-28.951-64.538-64.538-64.538zm0 96.807c-17.796 0-32.269-14.473-32.269-32.269s14.473-32.269 32.269-32.269 32.269 14.473 32.269 32.269c0 17.797-14.473 32.269-32.269 32.269zM166.185 304.403c-35.587 0-64.538 28.951-64.538 64.538s28.951 64.538 64.538 64.538 64.538-28.951 64.538-64.538-28.951-64.538-64.538-64.538zm0 96.807c-17.796 0-32.269-14.473-32.269-32.269s14.473-32.269 32.269-32.269c17.791 0 32.269 14.473 32.269 32.269 0 17.797-14.473 32.269-32.269 32.269zM430.15 119.675a16.143 16.143 0 00-14.419-8.885h-84.975v32.269h75.025l43.934 87.384 28.838-14.5-48.403-96.268z" /><path d="M216.202 353.345h122.084v32.269H216.202zM117.781 353.345H61.849c-8.912 0-16.134 7.223-16.134 16.134 0 8.912 7.223 16.134 16.134 16.134h55.933c8.912 0 16.134-7.223 16.134-16.134 0-8.912-7.223-16.134-16.135-16.134zM508.612 254.709l-31.736-40.874a16.112 16.112 0 00-12.741-6.239H346.891V94.655c0-8.912-7.223-16.134-16.134-16.134H61.849c-8.912 0-16.134 7.223-16.134 16.134s7.223 16.134 16.134 16.134h252.773V223.73c0 8.912 7.223 16.134 16.134 16.134h125.478l23.497 30.268v83.211h-44.639c-8.912 0-16.134 7.223-16.134 16.134 0 8.912 7.223 16.134 16.134 16.134h60.773c8.912 0 16.134-7.223 16.135-16.134V264.605c0-3.582-1.194-7.067-3.388-9.896zM116.706 271.597H42.487c-8.912 0-16.134 7.223-16.134 16.134 0 8.912 7.223 16.134 16.134 16.134h74.218c8.912 0 16.134-7.223 16.134-16.134.001-8.911-7.222-16.134-16.133-16.134zM153.815 208.134H16.134C7.223 208.134 0 215.357 0 224.269s7.223 16.134 16.134 16.134h137.681c8.912 0 16.134-7.223 16.134-16.134s-7.222-16.135-16.134-16.135z" /><path d="M180.168 144.672H42.487c-8.912 0-16.134 7.223-16.134 16.134 0 8.912 7.223 16.134 16.134 16.134h137.681c8.912 0 16.134-7.223 16.134-16.134.001-8.911-7.222-16.134-16.134-16.134z" /></svg>
               <span className="ml-2 text-sm">Ships in 5-7 days</span>
            </div>
            <div className="mt-1 sm:mt-0 sm:ml-8 flex items-center">
               <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001"><path d="M503.839 395.379l-195.7-338.962C297.257 37.569 277.766 26.315 256 26.315c-21.765 0-41.257 11.254-52.139 30.102L8.162 395.378c-10.883 18.85-10.883 41.356 0 60.205 10.883 18.849 30.373 30.102 52.139 30.102h391.398c21.765 0 41.256-11.254 52.14-30.101 10.883-18.85 10.883-41.356 0-60.205zm-25.978 45.207c-5.461 9.458-15.241 15.104-26.162 15.104H60.301c-10.922 0-20.702-5.646-26.162-15.104-5.46-9.458-5.46-20.75 0-30.208L229.84 71.416c5.46-9.458 15.24-15.104 26.161-15.104 10.92 0 20.701 5.646 26.161 15.104l195.7 338.962c5.459 9.458 5.459 20.75-.001 30.208z" /><path d="M241.001 176.01h29.996v149.982h-29.996zM256 355.99c-11.027 0-19.998 8.971-19.998 19.998s8.971 19.998 19.998 19.998c11.026 0 19.998-8.971 19.998-19.998S267.027 355.99 256 355.99z" /></svg>
               <span className="ml-2 text-sm">No returns!</span>
            </div>
         </div>

         {/* Add to Cart Bar */}
         <div className="sm:mx-auto lg:mx-0 mb-12 sm:mb-0 sm:mt-16">
            <div className="flex sm:items-center sm:static sm:w-full lg:absolute lg:bottom-0 justify-between w-screen fixed left-0 bottom-0 bg-theme-grey-900 border-t border-theme-grey-800 px-2 py-2">

               <div className="flex">
                  <span className="text-3xl">${product.price}</span>
                  <span className="pt-2 pl-1">.00</span>
               </div>
               <button onClick={addToCart} className="btn-primary h-10" disabled={!size || !material}>Add to Cart</button>
            </div>
         </div>

         {/* Message bar */}
         {isMessageActive && <div className="fixed inset-x-0 mx-2 bottom-0 mb-16 sm:mb-32 sm:w-2/3 lg:top-0 lg:bottom-auto lg:mt-16 lg:w-auto lg:right-0 lg:mb-0 lg:inset-x-auto lg:mr-8 lg:px-4 lg:mx-0 sm:mx-auto bg-white text-theme-grey-900 py-1 px-2 rounded shadow-lg">
            <p>Item added to cart!</p>
         </div>}
      </>
   );
}

export default ProductInfo;