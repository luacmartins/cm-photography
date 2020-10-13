import Main from '../components/Main'
import PageTitle from '../components/PageTitle'
import getPortfolio from '../utils/getPortfolio'

export default function PortfolioPage({ images }) {
   return (
      <Main title={'Portfolio'}>
         <div className="px-2 sm:px-4 lg:px-8 mt-8 lg:mt-16">
            <PageTitle
               title={'Portfolio'}
               subtitle={'My work is a product of years behind a camera. I always strive to capture the most beautiful light.'}
            />
            {/* <div className="mt-8 lg:mt-16 sm:flex sm:flex-row sm:flex-wrap sm:items-stretch">
               {images.map((image) => (
                  <img key={`${image}`} className="mt-2 sm:h-48 lg:h-128 sm:flex-1 sm:object-cover sm:mx-1 rounded" src={image} alt="" />
               ))}
            </div> */}

            <div className="mt-8 lg:mt-16 sm:col-gap-2 sm:col-count-2 lg:col-count-3 ">
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