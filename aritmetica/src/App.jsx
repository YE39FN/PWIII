import { useState } from 'react'
import { get, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import './App.css'

function App() {

  const form = useForm({
    defaultValues: {
      numero: Number,
      operacao: "",
      numero2: Number,
      resultado: ""
    }
  })

  const { handleSubmit, register, control, formState, getValues, setValue } = form
  const { errors } = formState
  
  const onSubmit = (data) => {
    console.log("Form Submitted", data)
  }

    if(getValues("operacao") === "+") {
      setValue("resultado", getValues("numero")+getValues("numero2"))
    }
    if(getValues("operacao") === "-") {
      setValue("resultado", getValues("numero")-getValues("numero2"))
    }
    if(getValues("operacao") === "x") {
      setValue("resultado", getValues("numero")*getValues("numero2"))
    }
    if(getValues("operacao") === "/") {
      setValue("resultado", getValues("numero")/getValues("numero2"))
    }
    if(getValues("operacao") === "%"){
      setValue("resultado", getValues("numero")%getValues("numero2"))
    }
    if(getValues("operacao") === "**"){
      setValue("resultado", getValues("numero")**getValues("numero2"))
    }


  
  return (
    <>
      <h1>Calculadora</h1>
      <br/>
      <br/>
      <form noValidate>
        <div className='numero'>
          <label htmlFor="numero">Digite o Primeiro número: </label>
          <br/>
          <input type="number" id="numero" {...register("numero", {
            valueAsNumber: true,
            required: {
              value: true,
              message: "Insira o número!"
            }
          })}/>
        </div>
        <br/>
        <p>{errors.numero?.message}</p>
        <br/>
        <br/>
        <div className='operacao'>
          <label htmlFor="operacao">Digite a operação: </label>
          <input type="text" id="operacao" {...register("operacao", {
            required: {
              value: true,
              message: "Digite a operação"
            }
          })}/>
        </div>
        <br/>
        <p>{errors.operacao?.message}</p>
        <br/>
        <br/>
        <div className='numero2'>
          <label htmlFor="numero2">Digite o Segundo número: </label>
          <input type="number" id="numero2" {...register("numero2", {
            valueAsNumber: true,
            required: {
              value: true,
              message: "Insira o número!"
            }
          })}/>
        </div>
        <br/>
        <p>{errors.numero2?.message}</p>
        <br/>
        <br/>
        <p>O resultado é: {getValues("resultado")}</p>
        <br/>
        <br/>
        
        <input type="button" value="enviar" onClick={handleSubmit(onSubmit)}></input>
      </form>
    </>
  )
}

export default App
