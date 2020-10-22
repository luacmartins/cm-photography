const ImageOverlay = ({ background, image }) => {
   return (
      <>
         <img className={`${background.css} absolute object-cover shadow-md rounded-sm`} src={image} alt="" />
         <img className="h-full w-full object-cover" src={background.src} alt="" />
      </>
   );
}

export default ImageOverlay;