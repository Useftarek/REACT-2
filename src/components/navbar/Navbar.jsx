import React from 'react'
import "../../styles/components/navbar/navbar.css"
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className='navbar_section'>
      <div className="login_section">
        <h1>Logo</h1>
        <ul>
            <li>
              <Link to = {"/"}>Home</Link>
                
            </li>
            <li>
            <Link to = {"/about"}>About</Link>
            </li>
            <li>
                <Link to = {"/services"}>Services</Link>
            </li>
            <li>
                <Link to = {"/contactUs"}>Contact Us</Link>
            </li>
            
        </ul>
        <button className='btn'>Login</button>
      </div>
  
      
    </nav>
  )
}
