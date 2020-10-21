import Link from 'next/link'
import Main from '../components/Main'
import SocialLinks from '../components/SocialLinks'

const data = {
   intro: "My name is Carlos Martins. I'm an Adventurer and Photographer.",
   description: "I was born and raised in Brazil and my passion for adventure started at an early age. Back then it meant to curiously follow my family around discovering how things worked. My curiosity led me to persue a degree in engineering and later on to taken on the world. <br><br> I picked up my first DSLR a month before embarking on a year-long backpacking trip throughout Southeast Asia. A simple entry level camera and a kit lens, without any accessories forced me to be creative and really explore my skills in my newfound passion. Without noticing, photography had become an integrant part of my life and I've taken it to a new level since then. <br><br> My skills improved and so did the gear behind it and now I am proud to share a piece of my work with you."
}

export default function MyStoryPage() {
   return (
      <Main title={'My Story'}>
         {/* Content Container */}
         <div className="px-4 lg:flex lg:items-center flex-1 mt-8 sm:px-32 sm:mt-16 lg:px-16 lg:mt-0">
            <div className="sm:px-8 lg:w-1/2 lg:px-16">
               {/* Profile pic */}
               <div className="flex justify-center mt-4">
                  <img className="h-32 w-32 sm:h-48 sm:w-48 lg:h-64 lg:w-64 object-cover rounded-full" src="/img/profile.jpg" alt="profile" />
               </div>

               {/* Tagline */}
               <h2 className="mt-4 font-thin sm:mt-8 text-2xl sm:text-3xl lg:text-4xl leading-7 sm:leading-10">
                  {data.intro}
               </h2>

               {/* Social links */}
               <div className="mt-6 flex">
                  <SocialLinks />
                  <a className="sm:block ml-4 sm:ml-6 hover:text-gray-400" href="mailto:luacmartins@gmail.com">
                     <svg className="h-6 fill-current" viewBox="0 0 479.058 479.058" xmlns="http://www.w3.org/2000/svg">
                        <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 015.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                     </svg>
                  </a>
               </div>
            </div>

            {/* Main text */}
            <div className="my-12 lg:mt-8 sm:mt-16 sm:text-lg lg:text-xl lg:w-1/2 sm:px-8 lg:px-16">
               <p className="font-thin text-lg" dangerouslySetInnerHTML={{ __html: data.description }}></p>
               <div className="font-thin text-lg mt-6">
                  <span>Check out my work at my </span>
                  <Link href="/portfolio">
                     <a className="font-semibold hover:underline">portfolio page</a>
                  </Link>
                  .
               </div>

            </div>
         </div>
      </Main>
   )
}