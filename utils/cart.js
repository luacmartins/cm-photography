import { createContext, useReducer, useEffect } from 'react'

const cart = createContext()
const { Provider } = cart

const getLocalStorage = () => {
   try {
      return JSON.parse(window.localStorage.getItem('cart')) || []
   } catch (e) {
      return []
   }
}

const setLocalStorage = (state) => {
   window.localStorage.setItem('cart', JSON.stringify(state))
}

const CartProvider = ({ children }) => {
   const [cartItems, dispatch] = useReducer((state, action) => {
      switch (action.type) {
         case 'ADD':
            const foundItemIndex = state.findIndex((item) => {
               return (
                  item.id === action.item.id
                  && item.options.size === action.item.options.size
                  && item.options.material === action.item.options.material
               )
            })

            if (foundItemIndex > -1) {
               state[foundItemIndex].cartQuantity += 1
               setLocalStorage(state)
               return state
            } else {
               setLocalStorage([...state, action.item])
               return [...state, action.item]
            }
         case 'EDIT':
            state[action.id] = {
               ...state[action.id], ...action.edit
            }
            setLocalStorage([...state])
            return [...state]
         case 'REMOVE':
            const filteredState = state.filter((item, index) => index !== action.id)
            setLocalStorage(filteredState)
            return filteredState
         case 'EMPTY':
            setLocalStorage([])
            return []
         default:
            setLocalStorage(state)
            return state
      }
   }, [])

   useEffect(() => {
      const initialState = getLocalStorage()
      initialState.forEach(item => dispatch({ type: 'ADD', item }))
   }, [])

   return <Provider value={{ cartItems, dispatch }}>{children}</Provider>
}

export { cart, CartProvider };