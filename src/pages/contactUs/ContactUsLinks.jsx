import React from 'react'
import { Link } from 'react-router-dom'
export default function ContactUsLinks() {
  return (
    <div className='contat_links'>
        <Link to={""} className='link'>Contact Us Form</Link>
        <Link to={"Emails"} className='link'>Emails</Link>
        <Link to={"Locations"}className='link'>Locations</Link>
        <Link to={"PhoneNumber"}className='link'>Phone Number</Link>
        <Link to={"Other"}className='link'>Other</Link>
    </div>
  )
}
