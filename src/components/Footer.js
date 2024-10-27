import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
export default function Footer() {
  return (
    <div className='container'>
      <footer class="footer">
    <div class="footer-container">

      <div class="footer-section about">
        <h3>About Us</h3>
        <p>We are dedicated to providing the finest products and services to our customers, making every experience memorable.</p>
      </div>


      <div class="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>All Products</Link></li>
          <li> <Link to='/about'>About Us</Link></li>
        </ul>
      </div>


      <div class="footer-section contact">
        <h3>Contact Info</h3>
        <p><strong>Address:</strong> 123 Street, City, Country</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Email:</strong> info@example.com</p>
      </div>

    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 The Perfume Co. All Rights Reserved.</p>
    </div>
  </footer>
    </div>
  )
}
