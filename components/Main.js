import Head from 'next/head'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import getViewportHeight from '../utils/getViewportHeight'

export default function Main({ children, title, bg = true }) {
   const [noScroll, setNoScroll] = useState(false)

   useEffect(() => {
      getViewportHeight()
   }, [])

   return (
      <>
         <Head>
            <title>CM Photography - {title}</title>
         </Head>
         <main className={`${bg ? 'bg-theme-grey-900' : ''} ${noScroll ? 'h-0 overflow-y-hidden max-h-screen' : ''} pb-12 min-h-screen sm:flex sm:flex-col text-white`} >
            <NavBar setNoScroll={setNoScroll} />
            {children}
         </main>
      </>
   )
}