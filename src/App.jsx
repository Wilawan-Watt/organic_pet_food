import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Story from './components/Story'
import Product_1 from './components/Product_1'
import Product_2 from './components/Product_2'
import About from './components/About'
import FindProduct from './components/FindProduct'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Story />
      <Product_1 />
      <Product_2 />
      <About />
      <FindProduct />
      <Footer />
    </>
  )
}

export default App
 