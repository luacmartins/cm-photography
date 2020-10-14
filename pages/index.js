import Main from '../components/Main'
import Link from 'next/link'

export default function HomePage() {
   return (
      <Main title={'Home'} bg={false}>
         <img className="hidden sm:flex absolute inset-0 h-screen w-screen object-cover object-left -z-10" src="/img/bg-desktop.jpg" alt="background" />
         <img className="sm:hidden absolute inset-0 h-screen w-screen object-cover object-left -z-10" src="/img/bg-mobile.jpg" alt="background" />

         <div className="flex flex-col items-center w-full mt-4 sm:mt-16 lg:absolute lg:bottom-0 lg:mb-16">
            <header className="text-4xl font-thin mx-4 sm:text-5xl text-gray-600 lg:text-4xl">Carlos Martins</header>
            <p className="text-sm font-thin mx-4 sm:text-xl text-center text-gray-600">adventurer, photographer</p>
            <div className="flex flex-col mt-8 w-1/2 sm:mt-12 sm:flex-row sm:w-64 lg:mt-8">
               <Link href="/shop">
                  <a className="btn-primary w-full text-gray-600 hover:bg-gray-200 sm:w-64">Shop</a>
               </Link>
               <Link href="/portfolio">
                  <a className="btn-primary w-full mt-2 text-gray-600 hover:bg-gray-200 sm:mt-0 sm:ml-4 sm:w-64">Portfolio</a>
               </Link>
            </div>
         </div>
      </Main>
   )
}