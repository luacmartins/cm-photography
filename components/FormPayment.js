import { useForm } from 'react-hook-form'
import FormInput from './FormInput'

const FormPayment = ({ step, index, data, setStep, nextStep }) => {
   const { register, handleSubmit, errors } = useForm()

   return (
      <div className=" border-theme-grey-600 bg-theme-grey-600 rounded-lg p-4 border-none lg:col-span-3">
         <div className="flex items-baseline justify-between">
            <h1 className={`${step !== index ? 'opacity-50' : ''} text-xl font-semibold`}>3. Payment</h1>
            {step !== index && data.nameCard && <button onClick={() => setStep(index)} className="opacity-50">Edit</button>}
         </div>
         <div>
            {step !== index && data.nameCard &&
               <div className="opacity-75 mt-2">
                  <p>{data.nameCard}</p>
                  <p>{data.cardNumber}</p>
                  <p>{data.expiration} {data.cvv}</p>
               </div>}
            {step === index &&
               <form onSubmit={handleSubmit((data) => nextStep({ payment: data }))} className="mt-4 grid lg:col-span-3 gap-y-2">
                  <FormInput
                     name='nameCard'
                     placeholder='Name on Card'
                     error={errors.nameCard}
                     defaultValue={data.nameCard}
                     register={register({
                        required: 'Please fill in your name.',
                        minLength: {
                           value: 2,
                           message: 'Invalid name.'
                        }
                     })}
                  />
                  <FormInput
                     name='cardNumber'
                     placeholder='Card Number'
                     error={errors.cardNumber}
                     defaultValue={data.cardNumber}
                     register={register({
                        required: 'Please fill in your credit card number.',
                        pattern: {
                           value: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/ || /^(?:5[1-5][0-9]{14})$/ || /^(?:3[47][0-9]{13})$/ || /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/,
                           message: 'Invalid credit card number.'
                        }
                     })}
                  />
                  <FormInput
                     name='expiration'
                     placeholder='Expiration date'
                     error={errors.expiration}
                     defaultValue={data.expiration}
                     register={register({
                        required: 'Please fill in the expiration date.',
                        pattern: {
                           value: /[\d]{2}\/[\d]{2}/,
                           message: 'Invalid expiration date.'
                        }
                     })}
                  />
                  <FormInput
                     name='cvv'
                     placeholder='CVV'
                     error={errors.cvv}
                     defaultValue={data.cvv}
                     register={register({
                        required: 'Please fill in your CVV.',
                        pattern: {
                           value: /[\d]{3}/ || /[\d]{4}/,
                           message: 'Invalid CVV.'
                        }
                     })}
                  />
                  <button className="btn-primary mt-2" type="submit">Continue</button>
               </form>}
         </div>
      </div>
   );
}

export default FormPayment;