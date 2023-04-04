import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from '../components/layout/Layout';
import {RoutesPage} from "../pages/index";
import AOS from "aos";
import "aos/dist/aos.css"


function App() {

useEffect(()=>{
  AOS.init()
  AOS.refresh()
},[]);

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        {RoutesPage.map((page, index)=>{
          return(
            <Route exact path={page.path} element={<page.component/>} key={index}/>
          )
        })}
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
