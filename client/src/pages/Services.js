import React from 'react'
import Heading from '../components/common/titles/Heading'
import { services } from '../constants/data'

const Services = () => {
  return (
    <>
    <section className='services'>
        <div className='container'>
            <Heading title="Services"/>
            <div className='content grid3'>
                {services.map((item, index)=> (
                    <div key={index} className='box' data-aos='flip-left'>
                         <i>{item.icon}</i>
                <h3 style={{color: "white"}}>{item.title}</h3>
                <p className='paragraph'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default Services