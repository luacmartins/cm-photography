import { useRouter } from 'next/router'
import Main from '../../components/Main'
import Carousel from '../../components/Carousel'
import ProductInfo from '../../components/ProductInfo'

// import fake store data
import { products } from '../../utils/products'

export default function SingleStorePage() {
   const path = useRouter().query.slug
   if (!path) return <></>
   const product = products.find((product) => product.slug === path)

   return (
      <Main title={'Shop'}>
         <div className="px-2 sm:mt-16 sm:w-2/3 sm:mx-auto lg:flex lg:w-10/12">
            <div className="lg:w-1/2 sm:h-128 lg:mx-4 rounded overflow-hidden">
               <Carousel>
                  {product.images.map((image) => (
                     <img key={product.id} className="h-full w-full object-cover" src={image.src} alt={image.alt} />
                  ))}
               </Carousel>
            </div>
            <div className="mt-2 sm:mt-4 px-1 lg:w-1/2 lg:mx-4 lg:flex lg:flex-col lg:relative">
               <ProductInfo product={product} />
            </div>
         </div>
      </Main>
   )
}