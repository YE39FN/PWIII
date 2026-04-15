import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Lista() {
  const itens = ["Maçã", "Banana", "Laranja"];
  const lista = [];
  let i = 0;

  while (i < itens.length) {
    lista.push(<li key={i}>{itens[i]}</li>);
    i++;
  }

  return <ul>{lista}</ul>;
}
export default function App() {
  return <Lista />;
}
