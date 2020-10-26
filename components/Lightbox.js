import { useEffect } from 'react'

const Lightbox = ({ setIsOpen, children }) => {
   const closeLightbox = () => {
      setIsOpen(false)
      document.body.style.overflow = ''
   }

   const closeOnEscape = (e) => {
      if (e.keyCode === 27) closeLightbox()
   }

   useEffect(() => {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', (e) => closeOnEscape(e))

      const cleanUp = () => {
         document.removeEventListener('keydown', closeOnEscape)
         document.body.style.overflow = ''
      }

      return () => {
         cleanUp()
      }
   }, [])

   return (
      <div className="lightbox fixed inset-0 w-screen h-screen z-50">
         <div className="absolute inset-0 bg-theme-grey-900 lg:max-h-156 z-50 sm:m-12 lg:my-20 lg:mx-28 sm:rounded-lg overflow-hidden">
            {/* Lightbox header */}
            <div className="text-white flex lg:absolute lg:right-0 justify-end border-b lg:border-none border-theme-grey-600">
               <div className="cursor-pointer hover:opacity-75" onClick={closeLightbox}>
                  <svg className="h-4 m-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001"><path d="M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z" /></svg>
               </div>
            </div>
            {/* Lightbox content */}
            <div className="overflow-scroll h-full sm:mx-2 mt-4 lg:mt-0 hide-scroll-bar lg:flex lg:items-center">
               {children}
            </div>
         </div>
         <div className="bg-theme-grey-400 w-screen h-screen absolute inset-0 opacity-75" onClick={closeLightbox}></div>
      </div>
   );
}

export default Lightbox;