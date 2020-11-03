import { useForm } from 'react-hook-form'
import axios from 'axios'
import Input from './Input'

const FormAddress = ({ step, index, data, setStep, nextStep }) => {
   const { register, handleSubmit, errors } = useForm()


   return (
      <div className="border-theme-grey-600 bg-theme-grey-600 rounded-lg p-4   border-none lg:col-span-3">
         <div className="flex items-baseline justify-between">
            <h1 className={`${step !== index ? 'opacity-50' : ''} text-xl font-semibold`}>2. Shipping Address</h1>
            {step !== index && data.address1 && <button onClick={() => setStep(index)} className="opacity-50">Edit</button>}
         </div>
         <div>
            {step !== index && data.address1 &&
               <div className="opacity-75 mt-2">
                  <p className="capitalize">{data.recipientName}</p>
                  <p className="capitalize">{data.address1}, {data.addressTownOrCity} <span className="uppercase">{data.stateOrCounty}</span> {data.postalOrZipCode}</p>
                  <p>{data.mobileTelephone}</p>
               </div>}
            {step === index &&

               <form onSubmit={handleSubmit(data => nextStep(data))} className="mt-4 grid lg:col-span-3 gap-y-2">
                  <Input
                     name='recipientName'
                     placeholder='Name'
                     error={errors.recipientName}
                     defaultValue={data.recipientName}
                     register={register({
                        required: 'Please enter your name.',
                        minLength: {
                           value: 2,
                           message: 'Invalid name.'
                        }
                     })}
                  />
                  {errors.recipientName && <div className="text-red-600 text-xs text-thin leading-snug">{errors.recipientName.message}</div>}
                  <Input
                     name='address1'
                     placeholder='Street Address'
                     error={errors.address1}
                     defaultValue={data.address1}
                     register={register({
                        required: 'Please enter street address.',
                        minLength: {
                           value: 2,
                           message: 'Invalid address.'
                        }
                     })}
                  />
                  {errors.address1 && <div className="text-red-600 text-xs text-thin leading-snug">{errors.address1.message}</div>}
                  <div className="flex gap-2">
                     <div className="flex-1">
                        <Input
                           name='addressTownOrCity'
                           placeholder='City'
                           error={errors.addressTownOrCity}
                           defaultValue={data.addressTownOrCity}
                           register={register({
                              required: 'Please enter city.',
                              minLength: {
                                 value: 2,
                                 message: 'Invalid city.'
                              }
                           })}
                        />
                        {errors.addressTownOrCity && <div className="hidden xl:flex mt-2 text-red-600 text-xs text-thin leading-snug">{errors.addressTownOrCity.message}</div>}
                     </div>
                     <div className="w-16 lg:w-32">
                        <Input
                           name='stateOrCounty'
                           placeholder='State'
                           error={errors.stateOrCounty}
                           defaultValue={data.stateOrCounty}
                           register={register({
                              required: 'Please enter state.',
                              minLength: {
                                 value: 2,
                                 message: 'Invalid state.'
                              }
                           })}
                        />
                        {errors.stateOrCounty && <div className="hidden xl:flex mt-2 text-red-600 text-xs text-thin leading-snug">{errors.stateOrCounty.message}</div>}
                     </div>
                     <div className="w-16 sm:w-20 lg:w-32">
                        <Input
                           name='postalOrZipCode'
                           placeholder='ZIP'
                           error={errors.postalOrZipCode}
                           defaultValue={data.postalOrZipCode}
                           register={register({
                              required: 'Please enter zip.',
                              pattern: {
                                 value: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
                                 message: 'Invalid ZIP.'
                              }
                           })}
                        />
                        {errors.postalOrZipCode && <div className="hidden xl:flex mt-2 text-red-600 text-xs text-thin leading-snug">{errors.postalOrZipCode.message}</div>}
                     </div>
                  </div>
                  <div className="mt-0">
                     {errors.addressTownOrCity && <div className="xl:hidden text-red-600 text-xs text-thin leading-snug">{errors.addressTownOrCity.message}</div>}
                     {errors.stateOrCounty && <div className="xl:hidden text-red-600 text-xs text-thin leading-snug">{errors.stateOrCounty.message}</div>}
                     {errors.postalOrZipCode && <div className="xl:hidden text-red-600 text-xs text-thin leading-snug">{errors.postalOrZipCode.message}</div>}
                  </div>
                  <button className="btn-primary mt-2" type="submit">Continue</button>
               </form>}
         </div>
      </div>
   );
}

export default FormAddress;

{/* <form onSubmit={handleSubmit((data) => nextStep({ address: { ...data, countryCode: 'US', preferredShippingMethod: 'Standard' } }))} className="mt-4 grid lg:col-span-3 gap-y-2"> */ }