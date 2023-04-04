import React from 'react'
import About from '../About'
import Blog from '../Blog'
import Contact from '../Contact'
import Services from "../Services";
import Counter from '../Counter';
import Portfolio  from '../Portfolio';
import Testimonials from '../Testimonials';
import Header from './Header';


const Home = () => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <Header/>
      <About/>
      <Services />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  )
}

export default Home