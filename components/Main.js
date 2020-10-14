import Head from 'next/head'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'

export default function Main({ children, title, bg = true }) {
   const [noScroll, setNoScroll] = useState(false)

   useEffect(() => {
      const getViewportHeight = () => {
         const customViewportCorrectionVariable = 'vh';

         function setViewportProperty(doc) {
            let prevClientHeight;
            let customVar = '--' + (customViewportCorrectionVariable || 'vh');
            function handleResize() {
               let clientHeight = doc.clientHeight;
               if (clientHeight === prevClientHeight) return;
               requestAnimationFrame(function updateViewportHeight() {
                  doc.style.setProperty(customVar, (clientHeight * 0.01) + 'px');
                  prevClientHeight = clientHeight;
               });
            }
            handleResize();
            return handleResize;
         }
         window.addEventListener('resize', setViewportProperty(document.documentElement));
      }
      getViewportHeight()
   })


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