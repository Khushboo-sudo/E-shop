import React from 'react'
import Cart from './component/Cart'
import Navbar from './component/Navbar'
import Products from './component/Products'
import ProductDetails from './component/ProductDetails'
import Searchitems from './component/Searchitems'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route Path='/' element={< Products/>}/>
        <Route Path='/product/:id' element={< ProductDetails/>}/>
        <Route Path='/search/:term' element={<Searchitems />}/>   
        <Route Path='/Cart' element={< Cart/>}/>
           </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App