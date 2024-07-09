import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

export const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

  return (
    <div className="navbar">
        <div className="nav-logo">
            <p>BUELAH</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("products")}}><Link style={{ textDecoration: 'none', color: 'black' }} to='/products'>Products</Link>{menu==="products"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("services")}}><Link style={{ textDecoration: 'none', color: 'black' }} to='/products'>Services</Link>{menu==="services"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contact-us")}}><Link style={{ textDecoration: 'none', color: 'black' }} to='/products'>Contact Us</Link>{menu==="contact-us"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
