const FormMessage = ({ error = true, message }) => {
   return (
      <p className={`${error ? 'text-red-600 mt-1' : 'text-theme-grey-400 mt-2'}  text-xs text-thin leading-snug`}>{message}</p>
   );
}

export default FormMessage;