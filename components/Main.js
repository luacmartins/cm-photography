import Head from 'next/head'
import { useState } from 'react'
import Nav from './Nav'

export default function Main({ children, title, bg = true }) {
   const [noScroll, setNoScroll] = useState(false)

   return (
      <>
         <Head>
            <title>CM Photography - {title}</title>
         </Head>
         <main className={`${bg ? 'bg-theme-grey-900' : ''} ${noScroll ? 'h-0 overflow-y-hidden' : ''} pb-12 min-h-screen sm:flex sm:flex-col text-white`} >
            <Nav setNoScroll={setNoScroll} />
            {children}
         </main>
      </>
   )
}