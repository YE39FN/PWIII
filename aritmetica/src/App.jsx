import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import './App.css'

function App() {

  const form = useForm({
    defaultValues: {
      numero: Number,
      operacao: "",
      numero2: Number
    }
  })

  const {handleSubmit, register, control, formState, getValues, } = form
  const { errors } = formState
  
  const onSubmit = (data) => {
    console.log("Form Submitted", data)
  }
  
  return (
    <>
      <form onClick={handleSubmit(onSubmit)} noValidate>
        
      </form>
    </>
  )
}

export default App
