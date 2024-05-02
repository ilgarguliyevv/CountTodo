import { useState } from 'react'
import './App.css'
import Count from './Count'
import Input from './Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count />
      <Input />
    </>
  )
}

export default App

