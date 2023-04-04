import React from 'react'
import {home} from "../../constants/data";
import Typewrite from "typewriter-effect";


const Header = () => {
  return (
    <header>
        {home.map((value, index)=> (
        <div className='headercontent'>
          <h3 className='fontSize' data-aos='fade-right'>
          {value.text}
          </h3>
          <h1>
          <Typewrite
          options={{
            strings: [`${value.name}`, `${value.post}`, `${value.design}`],
            autoStart: true,
            loop: true,
          }}
          />
          </h1>
          <p data-aos='fade-left'>{value.desc}</p>
        </div>
        ))}
       
    </header>
  )
}

export default Header