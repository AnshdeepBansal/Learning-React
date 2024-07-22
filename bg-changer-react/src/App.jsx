import { useState } from 'react'
import './App.css'  

function App() {
  const [color, setColor] = useState("olive")
  const [title, setTitle] = useState("white")

  return (
    <>
      <div className='w-full h-screen duration-200'style={{backgroundColor:color}}>
        <div className='text-5xl flex justify-center p-20 underline' style={{color:title}}>Background Changer using React</div>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2">
            <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>{setTitle("black");setColor("lavender");}} className='outline-none px-4 py-1 rounded-full text-black'
            style={{backgroundColor:"lavender"}}>Lavender</button>
            <button onClick={()=>{setTitle("white");setColor("blue")}} className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>{setTitle("white");setColor("black")}} className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor:"black"}}>Black</button>
            <button onClick={()=>setColor("olive")} className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor:"olive"}}>Olive</button>
            <button onClick={()=>{setTitle("black");setColor("pink")}} className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor:"pink"}}>Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
