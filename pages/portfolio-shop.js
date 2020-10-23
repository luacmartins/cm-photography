import { useState } from 'react'
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
            <div className="sm:col-gap-2 sm:col-count-2 lg:col-count-3">
               {products.map(item => (
                  <img key={item.id} srcSet={item.srcset} sizes={item.sizes} src={item.image.src} alt={item.image.alt} className="mb-2 sm:object-cover rounded cursor-pointer" onClick={() => openLightbox(item)} />
               ))}
            </div>
         </div>
         {isOpen && <Lightbox setIsOpen={setIsOpen} product={item}>
            <ShopProduct product={item} />
         </Lightbox>}
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