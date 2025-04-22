import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Story from './components/Story'
import Product_1 from './components/Product_1'
import Product_2 from './components/Product_2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Story />
      <Product_1 />
      <Product_2 />
    </>
  )
}

export default App
 