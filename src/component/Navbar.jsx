import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { items } from './ItemsData';


function Navbar({setdata}) {
  const filterByCategory= (category)=>{
    const device=items.filter((product)=>product.category===category)
   setdata(device)
  }
  return (
    <>
       <header className='sticky-top'>
        <div className='nav-bar'> 
        <Link to="/" className='brand-name'>E-SHOP</Link> 
        <div className='search-bar'>
            <input type="text"  placeholder='Search-Products' />
             </div>
       <Link to="/cart" className='cart-logo'>Cart </Link>
        </div>
        <div className='nav-bar-wrapper'>
            <div className='items'>Filter</div>
            <div
            onClick={()=>filterByCategory('mobiles')}
             className='items'>Mobile</div>
            <div
            onClick={()=>filterByCategory('laptops')}
            className='items'>laptop</div>
            <div
            onClick={()=>filterByCategory('tablets')}
            className='items'>Tablet</div>
           
            
            </div>
       </header>
       </>
  )
}

export default Navbar