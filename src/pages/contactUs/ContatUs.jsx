import React from 'react'
import ContactUsLinks from './ContactUsLinks'
import { Outlet } from 'react-router-dom'
export default function ContatUs() {
  return (
    <div className='banner_section'>
      <Outlet />
      <div className='contact_page'>
        <ContactUsLinks /> 
      </div>
    </div>
    
  )
}
