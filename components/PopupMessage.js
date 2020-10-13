const PopupMessage = ({ message }) => {
   return (
      <div className="fixed inset-x-0 mx-4 bottom-0 mb-32 sm:relative sm:mt-4  sm:mx-auto bg-red-400 text-red-900 py-1 px-2 rounded">
         <span>{message}</span>
      </div>
   );
}

export default PopupMessage;