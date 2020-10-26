import { useEffect } from 'react'

const useResizeImages = () => {
   useEffect(() => {
      const setImageWidth = () => {
         const $landscape = document.getElementsByClassName('landscape')
         const $portrait = document.getElementsByClassName('portrait')

         for (let i = 0; i < $landscape.length - 1; i++) {
            $landscape[i].style.height = `${$landscape[i].offsetWidth * 2 / 3}px`;
         }

         for (let j = 0; j < $portrait.length - 1; j++) {
            $portrait[j].style.height = `${$portrait[j].offsetWidth * 3 / 2}px`;
         }
      }
      setImageWidth()
      window.addEventListener('resize', setImageWidth)

      return () => {
         window.removeEventListener('resize', setImageWidth)
      }
   }, [])
}

export default useResizeImages