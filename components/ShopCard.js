import Link from 'next/link'
import Carousel from './Carousel'
import options from '../products/options'

const ShopCard = ({ product: { images, title, slug } }) => {
   return (
      <div className="flex flex-col h-full w-full lg:opacity-75 lg:hover:opacity-100 transition-all duration-200">
         <div className="rounded overflow-hidden flex-1">
            <Carousel>
               {images.map((image) => (
                  <Link key={image.src} href="/shop/[slug]" as={`/shop/${slug}`}>
                     <a>
                        <img className="rounded h-full w-full object-cover" src={image.src} alt={image.alt} />
                     </a>
                  </Link>
               ))}
            </Carousel>
         </div>
         <Link href="/shop/[slug]" as={`/shop/${slug}`}>
            <a className="sm:flex sm:flex-col">
               <div className="mt-1 flex justify-between mx-1">
                  <h3 className="font-semibold">{title}</h3>
                  <div>
                     <span className="text-sm text-theme-grey-400">from</span>
                     <span className="ml-2 font-semibold">${options.prices.from}</span>
                  </div>
               </div>
            </a>
         </Link>
      </div>
   )
}

export default ShopCard