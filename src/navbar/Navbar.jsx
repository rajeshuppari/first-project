import React, { useContext, useRef } from 'react'
import logo from '../component/assets/photos/logo.png'
import cart_icon from '../component/assets/photos/cart_icon.png'
import { Link } from 'react-router-dom'
import { cartContext } from '../createcontext/ContextProvider'
import './navbar.css'
// import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
           
            let{cart}  =useContext(cartContext);
         let nav_menu=useRef();

          function  dropdownClick(e)  {
                 nav_menu.current.classList.toggle('nav-menu-visible');
                 e.target.classList.toggle('open')

          }
  return (
    <div>

        <div className='nav-bar'>
            <div className='nav-logo'>

                <img src={logo} alt="" height={40}  width={45}/>
                <p>Shopper</p>
    
            </div>
            {/* <img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt=""  height={"2%"} width={"2%"} className='nav-dropdown' onClick={dropdownClick}/> */}
            <IoMenu className='nav-dropdown' onClick={dropdownClick}/>

            <div className='nav-menu'  ref={nav_menu}>
                <Link to='/' className='link'>Shop</Link>
                <Link to='/mens' className='link'>Mens</Link>
                <Link to='/womens' className='link'>Womens</Link>
                <Link to='/login' className='link'>Login</Link>
                <Link to='/signup' className='link'>SignUp</Link>

                </div>
                <div className='login'>
                
               <Link to='/cart'> <img src={cart_icon} alt=""  className='cart-icon' /></Link><sup>{cart.length}</sup>

               {/* <FaShoppingCart /> */}

                </div>

    

        </div>
    </div>
  )
}

export default Navbar