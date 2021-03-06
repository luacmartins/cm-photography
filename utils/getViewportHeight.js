// fixes scroll on mobile devices due to mobile browser bar

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
   window.addEventListener('resize touchmove', setViewportProperty(document.documentElement));
}

export default getViewportHeight