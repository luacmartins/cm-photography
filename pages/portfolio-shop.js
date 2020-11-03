import { useState } from 'react'
import LazyLoad from 'react-lazyload'
import Main from '../components/Main'
import Lightbox from '../components/Lightbox'
import ShopProduct from '../components/ShopProduct'

// import products
import { products } from '../products/products'

export default function PortfolioPage() {
   const [isOpen, setIsOpen] = useState(false)
   const [item, setItem] = useState('')

   const openLightbox = (item) => {
      setIsOpen(true)
      setItem(item)
   }

   return (
      <Main title={'Portfolio & Shop'}>
         <div className="px-2 sm:px-4 lg:px-8 mt-6 lg:mt-12">
            <div className="col-count-1 sm:col-count-2 lg:col-count-3 sm:col-gap-2">
               {products.map(item => (
                  <div className={`${item.orientation} rounded overflow-hidden mb-2 cursor-pointer h-0 relative`} key={item.id} onClick={() => openLightbox(item)}>
                     <LazyLoad
                        once
                        offset={100}
                        height='100%'
                        placeholder={<img src={item.image.lazy} className='blur w-full absolute top-0' />}
                     >
                        <img className="w-full absolute top-0" src={item.image.src} srcSet={item.srcet} sizes={item.sizes} />
                     </LazyLoad>
                  </div>
               ))}
            </div>
         </div>
         {
            isOpen && <Lightbox setIsOpen={setIsOpen}>
               <ShopProduct product={item} />
            </Lightbox>
         }
      </Main>
   )
}
