'use client'
import React, { useState } from 'react'
import Welcome from '@/components/Welcome'
import RegisterForm from '@/components/RegisterForm'

function Register() {
  const [step, setStep] = useState(1)

  const nextStep = (s: number) => {
    setStep(s)
  }

  return (
    <div>
      {step === 1 ? (
        <Welcome nextStep={nextStep} />
      ) : (
        <RegisterForm  previousStep={setStep}/>
      )}
    </div>
  )
}

export default Register
