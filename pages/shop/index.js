import Main from '../../components/Main'
import PageTitle from '../../components/PageTitle'
import ShopCard from '../../components/ShopCard'

// import fake data
import { products } from '../../utils/products'

export default function ShopPage() {
   return (
      <Main title={'Shop'} >
         <div className="px-2 sm:px-4 lg:px-8 mt-8 lg:mt-16">
            <PageTitle
               title={'Shop'}
               subtitle={'Decorate your home with my beautiful prints. They each have a unique story and I encourage you to find out more.'}
            />

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 lg:gap-y-12 lg:gap-x-6">
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