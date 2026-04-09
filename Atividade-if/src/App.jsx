import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const form = useForm();
  const { register, control, handleSubmit, formState, fieldValue} = form;
  const onSubmit = (data) => {
    console.log("Form submitted", data)
  }
  const { errors } = formState

    

    


  return (
    <>

      <h2>Digite o numero 1</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="numero">numero</label>
        <input type="number" id="numero" {...register("numero", {
          validate: {
            beta: (fieldValue) => {
              return (
                fieldValue == 1 ?
                "Você é beta!" :
                "Você é Sigma" 
              );
            }
          }
        })} />
        <p>{errors.numero?.message}</p>
     
      </form>
        
    </>
  )
        
      
}

export default App
