import React, { useState } from 'react'
import Cart from './component/Cart'
import Navbar from './component/Navbar'
import Products from './component/Products'
import ProductDetails from './component/ProductDetails'
import Searchitems from './component/Searchitems'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { items } from './component/ItemsData'


function App() {
  const [data,setdata]= useState([...items])
  return (
    <>
    <BrowserRouter>
    <Navbar setdata={setdata}/>
    <Routes>
      <Route path='/' element={<Products items={data}/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='/search/:term' element={<Searchitems/>}/>
      <Route path='/cart' element={<Cart/>}/>

    </Routes>
    </BrowserRouter>
    
     
      </>
  )
}

export default App