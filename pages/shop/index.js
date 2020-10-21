import Main from '../../components/Main'
import ShopCard from '../../components/ShopCard'

// import fake data
import { products } from '../../utils/products'

export default function ShopPage() {
   return (
      <Main title={'Shop'} >
         <div className="px-2 sm:px-4 lg:px-8 mt-6 lg:mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 lg:gap-y-12 lg:gap-x-6">
               {products.map((product) => (
                  <div key={product.id} className="h-64 sm:h-96">
                     <ShopCard product={product} />
                  </div>
               ))}
            </div>
         </div>
      </Main>
   )
}