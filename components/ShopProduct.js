import Carousel from './Carousel'
import ProductInfo from './ProductInfo'
import ImageOverlay from './ImageOverlay'
import options from '../products/options'

const ShopProduct = ({ product }) => {
   return (
      <div className="px-2 mb-40 lg:mb-0 sm:mx-auto lg:flex lg:items-center">
         <div className="lg:w-3/5 lg:h-128 lg:mx-4 rounded overflow-hidden">
            <Carousel>
               {[
                  <img key={'img'} className="h-full w-full object-cover" src={product.image.src} alt={product.image.alt} />,
                  ...options.backgrounds[product.orientation].map((background, i) => (
                     <ImageOverlay key={i} background={background} image={product.image.src} />
                  ))
               ]}
            </Carousel>
         </div>
         <div className="mt-2 sm:mt-4 lg:mt-0 px-1 lg:min-h-128 lg:w-2/5 lg:mx-4 lg:flex lg:flex-col lg:relative">
            <ProductInfo product={product} />
         </div>
      </div>
   );
}

export default ShopProduct;
