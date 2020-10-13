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
               <div className="mt-6">
                  <SocialLinks />
               </div>
            </div>

            {/* Main text */}
            <div className="mt-12 mb-12 lg:mt-8 sm:mt-16 sm:text-lg lg:text-xl lg:w-1/2 sm:px-8 lg:px-16">
               <p className="font-thin" dangerouslySetInnerHTML={{ __html: data.description }}>
                  {/* {data.description} */}
               </p>
            </div>
         </div>
      </Main>
   )
}