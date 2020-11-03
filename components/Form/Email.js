import { useForm } from 'react-hook-form'
import Input from './Input'

const FormEmail = ({ step, index, data, setStep, nextStep }) => {
   const { register, handleSubmit, errors } = useForm()

   return (
      <div className="border-theme-grey-600 bg-theme-grey-600 rounded-lg p-4 border-none lg:col-span-3">
         <div className="flex items-baseline justify-between">
            <h1 className={`${step !== index ? 'opacity-50' : ''} text-xl font-semibold`}>1. Your Email</h1>
            {step !== index && data && <button onClick={() => setStep(index)} className="opacity-50">Edit</button>}
         </div>
         <div>
            {step !== index && data &&
               <div className="opacity-75 mt-2">{data}</div>}
            {step === index &&
               <form onSubmit={handleSubmit(nextStep)} className="mt-4 grid lg:col-span-3 gap-y-2">
                  <Input
                     name='email'
                     placeholder='Email'
                     error={errors.email}
                     defaultValue={data}
                     register={register({
                        required: 'Please fill in your email address.',
                        pattern: {
                           value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                           message: 'Invalid email.'
                        }
                     })}
                  />
                  <button className="btn-primary mt-2" type="submit">Continue</button>
               </form>}
         </div>
      </div>
   );
}

export default FormEmail;