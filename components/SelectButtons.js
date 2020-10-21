const SelectButtons = ({ title, content, name, option, setOption }) => {
   return (
      <>
         <div className="mt-4 font-semibold lg:mt-6">{title}</div>
         <div className="mt-2 overflow-x-scroll py-1">
            {content.map((item) => (
               <label key={item} >
                  <input onChange={() => setOption(item)} checked={option === item} className="hidden" type="radio" name={name} value={item} />
                  <span className="text-sm border rounded border-white p-1 mr-2 cursor-pointer">{item}</span>
               </label>
            ))}
         </div>
      </>
   );
}

export default SelectButtons;