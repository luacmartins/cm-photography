const ImageOverlay = ({ background, image, srcset, sizes }) => {
   return (
      <>
         <img className={`${background.css} absolute object-cover shadow-md rounded-sm`} src={image} srcSet={srcset} sizes={sizes} alt="" />
         <img className="h-full w-full object-cover" src={background.src} alt="" />
      </>
   );
}

export default ImageOverlay;