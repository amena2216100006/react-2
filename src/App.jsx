import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'

function App() {

  function handleClick(){
    alert('I am clicked!')
  }

  const handleClick3 = () =>{alert('clicked 3')}
  const handleAdd5 = (num) =>{
    const newNum = num+5;
    alert(newNum);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={ ()=> handleAdd5(0)} >click to add 5</button>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick3}>Click me3</button>
      <button onClick={() =>alert('click4')}>Click me4</button>
      <button onClick={function handleClick2(){
        alert('I am clicked2')
      }}>clicke2</button>
    </>
  )
}

export default App
