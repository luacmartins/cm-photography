import { useState, useEffect } from 'react'
import LazyLoad from 'react-lazyload'

const LazyImage = ({ lazy, imageSrc, imageSrcSet, sizes, className }) => {
   const [srcSet, setSrcSet] = useState(lazy)
   const [src, setSrc] = useState(lazy)

   useEffect(() => {
      setSrc(lazy)

      const img = new Image()
      img.srcset = imageSrcSet
      img.sizes = sizes

      img.onload = () => {
         setSrcSet(imageSrcSet)
         setSrc(imageSrc)
      };
   }, [lazy, imageSrcSet])

   return (
      <LazyLoad once offset={100}>
         <img
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            className={`${className} ${srcSet === lazy ? 'blur' : ''}`}
         />
      </LazyLoad>
   )
};

export default LazyImage;