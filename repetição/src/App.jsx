import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Lista() {
  const itens = ["A", "B", "C"];
  const lista = [];

  for (let i = 0; i < itens.length; i++) {
    lista.push(<li key={i}>Item {itens[i]}</li>);
  }

  return <ul>{lista}</ul>;
}

export default function App() {
  return <Lista />;
}
