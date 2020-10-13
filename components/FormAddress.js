import { useForm } from 'react-hook-form'
import FormInput from './FormInput'

const FormAddress = ({ step, index, data, setStep, nextStep }) => {
   const { register, handleSubmit, errors } = useForm()

   return (
      <div className="border-theme-grey-600 bg-theme-grey-600 rounded-lg p-4   border-none lg:col-span-3">
         <div className="flex items-baseline justify-between">
            <h1 className={`${step !== index ? 'opacity-50' : ''} text-xl font-semibold`}>2. Address</h1>
            {step !== index && data.street && <button onClick={() => setStep(index)} className="opacity-50">Edit</button>}
         </div>
         <div>
            {step !== index && data.street &&
               <div className="opacity-75 mt-2">
                  <p>{data.name}</p>
                  <p>{data.street}, {data.state} {data.zip}</p>
                  <p>{data.phone}</p>
               </div>}
            {step === index &&
               <form onSubmit={handleSubmit((data) => nextStep({ address: data }))} className="mt-4 grid lg:col-span-3 gap-y-2">
                  <FormInput
                     name='name'
                     placeholder='Name'
                     error={errors.name}
                     defaultValue={data.name}
                     register={register({
                        required: 'Please fill in your name.',
                        minLength: {
                           value: 2,
                           message: 'Invalid name.'
                        }
                     })}
                  />
                  <FormInput
                     name='street'
                     placeholder='Street Address'
                     error={errors.street}
                     defaultValue={data.street}
                     register={register({
                        required: 'Please fill in your address.',
                        minLength: {
                           value: 2,
                           message: 'Invalid address.'
                        }
                     })}
                  />
                  <FormInput
                     name='state'
                     placeholder='State'
                     error={errors.state}
                     defaultValue={data.state}
                     register={register({
                        required: 'Please fill in your state.',
                        minLength: {
                           value: 2,
                           message: 'Invalid state.'
                        }
                     })}
                  />
                  <FormInput
                     name='zip'
                     placeholder='ZIP'
                     error={errors.zip}
                     defaultValue={data.zip}
                     register={register({
                        required: 'Please fill in your zip.',
                        pattern: {
                           value: /^\d{5}$|^\d{5}-\d{4}$/,
                           message: 'Invalid ZIP.'
                        }
                     })}
                  />
                  <FormInput
                     name='phone'
                     placeholder='Phone'
                     error={errors.phone}
                     defaultValue={data.phone}
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