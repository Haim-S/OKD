import React from 'react'
import {social_links} from "../../../constants/data"


const Footer = () => {
  return (
    <footer>
        {social_links.map((item, index)=>(
            <i key={index} data-aos='zoom-in'>{item.icon}</i>
        ))}
        <p data-aos='zoom-in'>All rights reserved to AHs</p>
    </footer>
  )
}

export default Footer