const Input = ({ register, error, name, ...props }) => {
   return (
      <>
         <input
            ref={register}
            name={name}
            defaultValue=''
            {...props}
            className={
               `${error ? 'border-red-600 text-red-600' : 'border-theme-grey-800 focus:border-white'} 
               ${props.disabled ? 'bg-theme-grey-600 py-0 px-0 opacity-75' : 'py-1 px-2 bg-theme-grey-800'} 
                rounded w-full border focus:outline-none placeholder-white placeholder-opacity-25`}
         />
      </>
   );
}

export default Input;