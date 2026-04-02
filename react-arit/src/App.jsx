import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form>
        <label for="n1">Coloque o primeiro número aqui: </label>
        <br></br>
        <input type="number" name="n1" id="n1"></input>
        <br></br>
        <label for="op">Coloque a operação aqui: </label>
        <br></br>
        <input type="text" name="op" id="op"></input>
        <br></br>
        <label for="n2">Coloque o segundo número aqui: </label>
        <br></br>
        <input type="number" name="n2" id="n2"></input>
        <br></br>
        <br></br>
        <input type="submit" name="mandar" id="mandar"></input>
      </form>
    </>
  )
}

export default App
