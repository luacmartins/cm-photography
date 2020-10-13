import { useState } from 'react'
import OrderSummary from './OrderSummary'
import FormEmail from './FormEmail'
import FormAddress from './FormAddress'
import FormPayment from './FormPayment'

const CheckoutForm = () => {
   const [step, setStep] = useState(1)
   const [data, setData] = useState({
      email: '',
      address: {},
      payment: {},
      items: {}
   })

   const nextStep = (formData) => {
      setStep(step + 1)
      setData({ ...data, ...formData })
   }

   return (
      <div className="mt-4 px-4 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:px-8 lg:w-9/12 lg:mx-auto lg:grid-cols-5">
         <div className="grid lg:col-span-3 gap-y-2">
            {/* Email */}
            <FormEmail step={step} index={1} data={data.email} setStep={setStep} nextStep={nextStep} />
            <FormAddress step={step} index={2} data={data.address} setStep={setStep} nextStep={nextStep} />
            <FormPayment step={step} index={3} data={data.payment} setStep={setStep} nextStep={nextStep} />
         </div>
         <div className="lg:col-span-2 sm:sticky sm:h-0 sm:top-header">
            <OrderSummary disabled={step < 4} data={data} />
         </div>
      </div>
   );
}

export default CheckoutForm;