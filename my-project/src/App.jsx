import React from 'react'
import Timer from './Timer'

const App = () => {
  return (
    <div className=" flex justify-center items-center w-screen h-screen bg-blue-300">
      <Timer initialTime={60}/>
    </div>
  )
}

export default App