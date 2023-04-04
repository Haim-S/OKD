import React, {Suspense} from 'react'
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Suspense fallback={<h1>loading.....</h1>}>
        <>
        <Outlet/>
        </>
    </Suspense>
    <Footer/>
    </>
  )
}

export default Layout