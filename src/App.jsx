import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  const increase = () =>{
    setCount(count+1)
  }

  const decrease = () =>{
    if(count>0){
    setCount(count-1)
    }
  }

  const reset = () =>{
    setCount(0)
  }

  return (
  <div className="flex items-center justify-center min-h-screen bg-amber-50">
    <div className="bg-amber-100 p-10 rounded-lg shadow-lg">
      
      <h1 className="text-5xl font-bold underline text-center mb-5">
        Counter App
      </h1>

      <h1 className="text-6xl font-light text-center mb-10">{count}</h1>

      <div className="flex justify-center gap-9 text-3xl">
        <button 
          onClick={increase} 
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600" >
          Increase
        </button>

        <button 
          onClick={decrease} 
          className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600"   >
          Decrease
        </button>

        <button 
          onClick={reset} 
          className="bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-600"  >
          Reset
        </button>
      </div>
    </div>
  </div>
)

}

export default App
