import Link from 'next/link'
import Main from '../components/Main'
import SocialLinks from '../components/SocialLinks'

const data = {
  intro: "I'm Carlos Martins, </br> Adventurer and Photographer.",
  description:
    "I was born and raised in Brazil and my passion for adventure started at an early age. When I was a kid, that meant curiously following my family around and discovering how everything worked. Later on, my curiosity led me to pursue a degree in engineering and then take on the world. </br></br>I picked up my first DSLR a month before embarking on 1.5 year backpacking trip throughout Southeast Asia. With just a simple entry-level camera and a kit lens without any accessories, I learned the basics of my newfound passion through experimentation. However, in no time, photography became an integral part of my life and I've since taken it to a whole new level. </br></br>As my skills improved, so did the gear behind it. Now I shoot with a Canon 6D and two lenses that I carry with me at all times: Canon 24-105mm f/4 and Sigma 150-600mm f/5-6.3. A Vanguard carbon fiber tripod completes my pack.</br></br>Landscapes and wildlife are the preferred subjects of my photographs because they are nature’s art gallery. They display nature’s unmatched raw beauty - photography simply allows me to capture and share that with others.",
}

export default function MyStoryPage() {
  return (
    <Main title={'My Story'}>
      {/* Content Container */}
      <div className='flex-1 px-4 mt-8 lg:flex lg:items-center sm:px-32 sm:mt-16 lg:px-16 lg:mt-0'>
        <div className='sm:px-8 lg:w-1/2 lg:px-16'>
          {/* Profile pic */}
          <div className='flex justify-center mt-4'>
            <img
              className='object-cover w-32 h-32 rounded-full sm:h-48 sm:w-48 lg:h-64 lg:w-64'
              src='/img/profile.jpg'
              alt='profile'
            />
          </div>

          {/* Tagline */}
          <h2
            className='mt-4 text-2xl font-thin leading-7 sm:mt-8 sm:text-3xl lg:text-4xl sm:leading-10'
            dangerouslySetInnerHTML={{ __html: data.intro }}
          >
            {/* {data.intro} */}
          </h2>

          {/* Social links */}
          <div className='flex mt-6'>
            <SocialLinks />
            <a
              className='ml-4 sm:block sm:ml-6 hover:text-gray-400'
              href='mailto:luacmartins@gmail.com'
            >
              <svg
                className='h-6 fill-current'
                viewBox='0 0 479.058 479.058'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 015.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z' />
              </svg>
            </a>
          </div>
        </div>

        {/* Main text */}
        <div className='my-12 lg:mt-8 sm:mt-16 sm:text-lg lg:text-xl lg:w-1/2 sm:px-8 lg:px-16'>
          <p
            className='text-lg font-thin'
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></p>
          <div className='mt-6 text-lg font-thin'>
            <span>See the world through my lens on my </span>
            <Link href='/portfolio-shop'>
              <a className='font-semibold hover:underline'>portfolio page</a>
            </Link>
            .
          </div>
        </div>
      </div>
    </Main>
  )
}
