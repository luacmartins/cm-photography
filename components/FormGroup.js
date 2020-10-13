import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import FormInput from './FormInput'

const FormGroup = ({ title, step, index, data, setStep, setData }) => {
   const methods = useForm()

   const nextStep = (formData) => {
      setStep(step + 1)
      setData({ ...data, ...formData })
   }

   return (
      <div className="border-theme-grey-600 pt-2 bg-theme-grey-600 rounded-lg p-4 lg:col-span-3">
         {/* Header */}
         <div className="flex items-baseline justify-between">
            <h1 className={`${step !== index ? 'opacity-50' : ''} text-xl font-semibold`}>{index}. {title}</h1>
            {step !== index && data && <button onClick={() => setStep(index)} className="opacity-50">Edit</button>}
         </div>
         <div>
            {/* Render data when validated */}
            {step !== index && data &&
               <div className="opacity-75 mt-2">
                  <EmailData />
               </div>}

            {/* Render form */}
            {step === index &&
               <FormProvider {...methods} >
                  <form onSubmit={methods.handleSubmit((data) => nextStep({ email: data }))} className="mt-4 grid lg:col-span-3 gap-y-2">
                     <EmailForm data={data} />
                     <button className="btn-primary mt-2" type="submit">Continue</button>
                  </form>
               </FormProvider>
            }
         </div>
      </div>
   );
}

export default FormGroup;

export const EmailData = ({ data }) => {
   return (
      <p>{data}</p>
   );
}

export const EmailForm = ({ data }) => {
   const { register, errors } = useFormContext()
   return (
      <FormInput
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
   );
}
