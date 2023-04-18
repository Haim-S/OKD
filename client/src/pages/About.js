import React from 'react'
import { about } from '../constants/data'
import Heading from '../components/common/titles/Heading'

const About = () => {
  return (
    <>
    <section className='about'>
        <div className='container flex'>
            {about.map((value, index)=> (
                <>
                <div className='left' data-aos='fade-down-right'>
                    <img src={value.cover} alt="about.pic" />
                </div>
                <div className='right' data-aos= 'fade-down-left'>
                    <Heading title="Okd"/>
                    <p>{value.desc}</p>
                    <p>{value.desc1}</p>
                </div>
                </>
            ))}
        </div>
    </section>
    </>
  )
}

export default About