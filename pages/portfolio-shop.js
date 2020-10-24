import { useState } from 'react'
import LazyImage from '../components/LazyImage'
import Main from '../components/Main'
import getPortfolio from '../utils/getPortfolio'
import Lightbox from '../components/Lightbox'
import ShopProduct from '../components/ShopProduct'

// import fake data
import { products } from '../products/products'

export default function PortfolioPage({ images }) {
   const [isOpen, setIsOpen] = useState(false)
   const [item, setItem] = useState('')

   const openLightbox = (item) => {
      setIsOpen(true)
      setItem(item)
   }

   return (
      <Main title={'Portfolio & Shop'}>
         <div className="px-2 sm:px-4 lg:px-8 mt-6 lg:mt-12">
            <div className="sm:col-count-2 lg:col-count-3 sm:col-gap-2">
               {products.map(item => (
                  <div className={`rounded overflow-hidden mb-2 cursor-pointer`} key={item.id} onClick={() => openLightbox(item)}>
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
            isOpen && <Lightbox setIsOpen={setIsOpen} product={item}>
               <ShopProduct product={item} />
            </Lightbox>
         }
      </Main>
   )
}

export async function getStaticProps() {
   const images = getPortfolio()
   return {
      props: {
         images
      }
   }
}
