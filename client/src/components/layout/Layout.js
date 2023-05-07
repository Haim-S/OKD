import React, {Suspense} from 'react'
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';
import { Bars } from 'react-loading-icons'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Suspense fallback={<div style={{marginLeft: "45%"}}><Bars/></div>}>
        <>
        <Outlet/>
        </>
    </Suspense>
    <Footer/>
    </>
  )
}

export default Layout