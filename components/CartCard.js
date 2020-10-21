import { useContext } from 'react'
import { cart } from '../utils/cart'

export default function CartCard({ product: { title, image: { src, alt }, options: { size, material }, cartQuantity, price }, id, removeButton = true, bg = true, disabled = false }) {
   const { dispatch } = useContext(cart)

   const removeFromCart = () => {
      dispatch({
         type: 'REMOVE',
         id
      })
   }

   const editQuantity = (qty) => {
      let cartQuantity
      qty < 1 || qty === '' ? cartQuantity = '' : cartQuantity = qty
      dispatch({
         type: 'EDIT',
         id,
         edit: {
            cartQuantity
         }
      })
   }

   const handleMinQuantity = (qty) => {
      if (qty < 1) {
         dispatch({
            type: 'EDIT',
            id,
            edit: {
               cartQuantity: 1
            }
         })
      }
   }

   return (
      <div className={`${bg ? 'bg-theme-grey-900' : ''} flex items-center py-2 sm:px-2  text-white w-full`}>
         <button onClick={removeFromCart} className={`${removeButton ? 'block mr-2' : 'hidden'}`}>
            <svg className="h-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001"><path d="M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z" /></svg>
         </button>
         <img className="w-12 h-12 mr-2 object-cover rounded" src={src} alt={alt} />
         <div className="flex flex-col flex-1">
            <div className="flex text-sm justify-between leading-tight">
               <h4 className="word-break pr-1">{title}</h4>
               <div className="flex items-baseline">
                  <input value={cartQuantity} onChange={(e) => editQuantity(e.target.value)} onBlur={(e) => handleMinQuantity(e.target.value)} className="bg-theme-grey-800 rounded w-6 h-4 text-center leading-4" type="number" min="1" step="1" disabled={disabled} />
                  <span className="text-xs text-theme-grey-400 mx-1">x</span>
                  <span>${price}</span>
               </div>
            </div>
            <div className="text-xs text-theme-grey-400 mt-1">
               <span>{material}</span>
               <span className="ml-2">{size}</span>
            </div>
         </div>
      </div>
   )
}