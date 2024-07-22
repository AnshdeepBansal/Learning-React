import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  const increment = ()=>{
    console.log("clicked");
    if(counter+1>20)return;
    setCounter(counter +1);
  }
  const decrement = ()=>{
    console.log("clicked");
    if(counter-1<0)return;
    setCounter(counter -1);
  }
  return (
    <>
      <h1 >Counter</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={increment}>Increase</button>
      <br />
      <button onClick={decrement}>Decrease</button>
      <div>{counter}</div>
    </>
  )
}

export default App
