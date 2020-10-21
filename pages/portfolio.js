import Main from '../components/Main'
import getPortfolio from '../utils/getPortfolio'

export default function PortfolioPage({ images }) {
   return (
      <Main title={'Portfolio'}>
         <div className="px-2 sm:px-4 lg:px-8 mt-6 lg:mt-12">
            <div className="sm:col-gap-2 sm:col-count-2 lg:col-count-3 ">
               {images.map((image) => (
                  <img key={`${image}`} className="mb-2 sm:object-cover rounded" src={image} alt="" />
               ))}
            </div>

         </div>
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