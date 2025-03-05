import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Story from './components/Story'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Story />
    </>
  )
}

export default App
 