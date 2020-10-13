export default function PageTitle({ title, subtitle }) {
   return (
      <div className="sm:w-2/3 lg:w-1/2 sm:mx-auto">
         <h1 className="text-3xl lg:text-4xl font-light text-center">{title}</h1>
         <h2 className="mt-4 lg:mt-8 lg:text-xl font-thin text-center leading-tight">
            {subtitle}
         </h2>
      </div>
   )
}