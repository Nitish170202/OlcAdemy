import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import '../styles/Navbars.css';
import Cart from './../screens/Cart';
import { useCart } from './ContextReducer';
const Logo = require('../components/Images/logo.webp')


export default function Navbars() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [CartView , setCartView] = useState(false);

  let data = useCart();
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
        <h3>The <span>Perfume</span> Co.</h3>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        {/* <a href="#home">Home</a> */}
        <Link to='/'>Home</Link>
        <Link to='/'>All Products</Link>
        <Link to='/about'>About Us</Link>

<div>
            <div className='btn bg-white  mx-2' onClick={()=>{setCartView(true)}}>
            My Cart{" "}
              <Badge pill bg='danger'>{data.length}</Badge>
            </div>
            {CartView ? <Modal onClose={()=>setCartView(false)}><Cart ></Cart></Modal> :" " }
            </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
    </>
  )
}
