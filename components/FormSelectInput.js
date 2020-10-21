const FormSelectInput = ({ register, error, name, ...props }) => {
   const states = ["AK",
      "AL",
      "AR",
      "AS",
      "AZ",
      "CA",
      "CO",
      "CT",
      "DC",
      "DE",
      "FL",
      "GA",
      "GU",
      "HI",
      "IA",
      "ID",
      "IL",
      "IN",
      "KS",
      "KY",
      "LA",
      "MA",
      "MD",
      "ME",
      "MI",
      "MN",
      "MO",
      "MS",
      "MT",
      "NC",
      "ND",
      "NE",
      "NH",
      "NJ",
      "NM",
      "NV",
      "NY",
      "OH",
      "OK",
      "OR",
      "PA",
      "PR",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VA",
      "VI",
      "VT",
      "WA",
      "WI",
      "WV",
      "WY"]

   return (
      <div className="relative">
         <select
            ref={register}
            name={name}
            {...props}
            className={
               `${error ? 'border-red-600' : 'border-theme-grey-800 focus:border-white'} 
               py-1 px-2 bg-theme-grey-800 appearance-none rounded w-full border focus:outline-none`}
         >
            {states.map(item => <option key={item} value={item}>{item}</option>)}
         </select>
         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 opacity-25">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
         </div>
         {error && <div className="text-red-600 text-xs text-thin leading-snug">{error.message}</div>}
      </div>
   );
}

export default FormSelectInput;