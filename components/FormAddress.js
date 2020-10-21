import { useForm } from 'react-hook-form'
import FormInput from './FormInput'
import FormSelectInput from './FormSelectInput'

const FormAddress = ({ step, index, data, setStep, nextStep }) => {
   const { register, handleSubmit, errors } = useForm()

   return (
      <div className="border-theme-grey-600 bg-theme-grey-600 rounded-lg p-4   border-none lg:col-span-3">
         <div className="flex items-baseline justify-between">
            <h1 className={`${step !== index ? 'opacity-50' : ''} text-xl font-semibold`}>2. Address & Shipping</h1>
            {step !== index && data.address1 && <button onClick={() => setStep(index)} className="opacity-50">Edit</button>}
         </div>
         <div>
            {step !== index && data.address1 &&
               <div className="opacity-75 mt-2">
                  <p>{data.recipientName}</p>
                  <p>{data.address1}, {data.addressTownOrCity} {data.stateOrCounty} {data.postalOrZipCode}</p>
                  <p>{data.mobileTelephone}</p>
               </div>}
            {step === index &&
               <form onSubmit={handleSubmit((data) => nextStep({ address: { ...data, countryCode: 'US', preferredShippingMethod: 'Standard' } }))} className="mt-4 grid lg:col-span-3 gap-y-2">
                  <FormInput
                     name='recipientName'
                     placeholder='Name'
                     error={errors.recipientName}
                     defaultValue={data.recipientName}
                     register={register({
                        required: 'Please fill in your name.',
                        minLength: {
                           value: 2,
                           message: 'Invalid name.'
                        }
                     })}
                  />
                  <FormInput
                     name='address1'
                     placeholder='Street Address'
                     error={errors.address1}
                     defaultValue={data.address1}
                     register={register({
                        required: 'Please fill in your address.',
                        minLength: {
                           value: 2,
                           message: 'Invalid address.'
                        }
                     })}
                  />
                  <FormInput
                     name='addressTownOrCity'
                     placeholder='City'
                     error={errors.addressTownOrCity}
                     defaultValue={data.addressTownOrCity}
                     register={register({
                        required: 'Please fill in your city.',
                        minLength: {
                           value: 2,
                           message: 'Invalid city.'
                        }
                     })}
                  />
                  <FormSelectInput
                     name='stateOrCounty'
                     placeholder='State'
                     error={errors.stateOrCounty}
                     defaultValue='State'
                     register={register({
                        required: 'Please select your state.',
                        minLength: {
                           value: 2,
                           message: 'Invalid state.'
                        }
                     })}
                  />
                  <FormInput
                     name='postalOrZipCode'
                     placeholder='ZIP'
                     error={errors.postalOrZipCode}
                     defaultValue={data.postalOrZipCode}
                     register={register({
                        required: 'Please fill in your zip.',
                        pattern: {
                           value: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
                           message: 'Invalid ZIP.'
                        }
                     })}
                  />
                  <FormInput
                     name='mobileTelephone'
                     placeholder='Phone'
                     error={errors.mobileTelephone}
                     defaultValue={data.mobileTelephone}
                     register={register({
                        required: 'Please fill in your phone.',
                        pattern: {
                           value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                           message: 'Invalid phone number.'
                        }
                     })}
                  />
                  <button className="btn-primary mt-2" type="submit">Continue</button>
               </form>}
         </div>
      </div>
   );
}

export default FormAddress;