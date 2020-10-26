import { useState, useEffect } from 'react'
import useResizeImages from '../utils/useResizeImages'
import LazyImage from '../components/LazyImage'
import Main from '../components/Main'
import Lightbox from '../components/Lightbox'
import ShopProduct from '../components/ShopProduct'
import getViewportHeight from '../utils/getViewportHeight'

// import fake data
import { products } from '../products/products'

export default function PortfolioPage() {
   const [isOpen, setIsOpen] = useState(false)
   const [item, setItem] = useState('')
   const [height, setHeight] = useState(undefined)

   useResizeImages()

   const openLightbox = (item) => {
      window.innerWidth < 640 ? setHeight(window.innerHeight) : setHeight(undefined)
      setIsOpen(true)
      setItem(item)
   }

   return (
      <Main title={'Portfolio & Shop'}>
         <div className="px-2 sm:px-4 lg:px-8 mt-6 lg:mt-12">
            <div className="sm:col-count-2 lg:col-count-3 sm:col-gap-2">
               {products.map(item => (
                  <div className={`${item.orientation} rounded overflow-hidden mb-2 cursor-pointer`} key={item.id} onClick={() => openLightbox(item)}>
                     <LazyImage
                        lazy={item.image.lazy}
                        imageSrcSet={item.srcset}
                        imageSrc={item.image.src}
                        sizes={item.sizes}
                        className='w-full'
                     />
                  </div>
               ))}
            </div>
         </div>
         {
            isOpen && <Lightbox setIsOpen={setIsOpen} height={height}>
               <ShopProduct product={item} />
            </Lightbox>
         }
      </Main>
   )
}
