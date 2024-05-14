import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

function Navbar() {
  const[menu , setMenu] = useState("Shop");
  const { getTotalCartItems } = useContext(ShopContext)
  
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt=''/>
        <p>SHOPPER</p>
      </div>
    <ul className='nav-menu'>
         <li onClick={()=>setMenu("Shop")}>
            <Link to='/' style={{textDecoration:'none'}}>Shop</Link>
            {menu==="Shop"?<hr/>:<></>}
         </li>
         <li onClick={()=>setMenu("Mens")}>
            <Link to="mens" style={{textDecoration:'none'}} > Mens</Link>
            {menu==="Mens"?<hr/>:<></>}
         </li>
         <li onClick={()=>setMenu("Womens")}>
            <Link to='/womens' style={{textDecoration:'none'}}>Womens</Link> 
            {menu==="Womens"?<hr/>:<></>}
          </li>
         <li onClick={()=>setMenu("Kids")}>
           <Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>
            {menu==="Kids"?<hr/>:<></>} 
          </li>
    </ul>

    <div className='nav-login-cart'>
        <Link to='loginsignup'> <button>Login</button> </Link>
        
        <Link to='cart'><img src={cart_icon}/></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
        
    </div>
    </div>
  )
}

export default Navbar
