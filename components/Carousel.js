import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

const Carousel = ({ children }) => {
   const [slide, setSlide] = useState(0)

   const slideLeft = () => {
      slide === 0 ? setSlide(children.length - 1) : setSlide(slide - 1)
   }

   const slideRight = () => {
      slide === (children.length - 1) ? setSlide(0) : setSlide(slide + 1)
   }

   const swipeHandlers = useSwipeable({
      onSwipedLeft: slideRight,
      onSwipedRight: slideLeft
   })

   return (
      <>
         <div {...swipeHandlers} className="flex items-center relative h-full w-full group transition">
            {/* Slider */}
            <div className="flex h-full w-full overflow-x-hidden">
               {children.map((item, idx) => (
                  <div
                     key={idx}
                     style={{ transform: `translateX(-${100 * slide}%)` }}
                     className="min-w-full transition duration-300"
                  >{item}</div>
               ))}
            </div>

            {/* Controls */}
            <div className="hidden lg:group-hover:block">
               <button className="absolute left-0 ml-2 bg-white rounded-full opacity-50 hover:opacity-75 p-2" onClick={slideLeft} >
                  <svg className="h-6 p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.847 451.847"><path d="M97.141 225.92c0-8.095 3.091-16.192 9.259-22.366L300.689 9.27c12.359-12.359 32.397-12.359 44.751 0 12.354 12.354 12.354 32.388 0 44.748L173.525 225.92l171.903 171.909c12.354 12.354 12.354 32.391 0 44.744-12.354 12.365-32.386 12.365-44.745 0l-194.29-194.281c-6.167-6.177-9.252-14.274-9.252-22.372z" /></svg>
               </button>
               <button className="absolute right-0 mr-2 bg-white rounded-full opacity-50 hover:opacity-75 p-2" onClick={slideRight} >
                  <svg className="h-6 p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.847 451.847"><path d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" /></svg>
               </button>
            </div>

            {/* Dots */}
            <div className="flex absolute bottom-0 mb-2 w-full justify-center">
               {children.map((item, idx) => (
                  <span key={idx} className={`${slide === idx ? 'bg-white' : 'bg-white opacity-50'} h-2 w-2  rounded-full mx-1`}></span>
               ))}
            </div>
         </div>
      </>
   )
}

export default Carousel;
