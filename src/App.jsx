import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './components/banner/Banner'
import Layout from './components/layout/Layout'
import Homepage from './pages/homepage/Homepage'
import ContatUs from './pages/contactUs/ContatUs'
import AboutUs from './pages/aboutUs/AboutUs'
import Services from './pages/services/Services'
import ContactUsForm from './components/contact Us Form/ContactUsForm'
import Emails from './components/emails/Emails'
import PhoneNumber from './components/phoneNumber/PhoneNumber'
import Other from './components/other/Other'
import Loctaion from './components/location/Loctaion'


export default function App() {
  const Routes = createBrowserRouter([
    {path: "/" , element: <Layout /> , children: [
      {path: "/", element: <Homepage />},
      {path: "/about", element: <AboutUs />},
      {path: "/services", element: <Services />},

      {path: "/contactUs", element: <ContatUs /> , children: [
        {index:true, element: <ContactUsForm />},
        {path: "/contactUs/PhoneNumber", element: <PhoneNumber />},
        {path: "/contactUs/Emails", element: <Emails />},
        {path: "/contactUs/Locations", element: <Loctaion />},
        {path: "/contactUs/Other", element: <Other />},
      ] },
      
    ]},
    
  ]);
  return (

    <RouterProvider router={Routes} />
  )
}
