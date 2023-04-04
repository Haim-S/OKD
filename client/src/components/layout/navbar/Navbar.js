import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {Menu} from "@mui/icons-material"
import {RoutesPage} from "../../../pages/index";
import logo from "../../../images/logoOkd1.png"

const Navbar = () => {

    const [responsive, setResponsive] = useState(false);
  return (
    <nav>
    <div className='container flexsb'>
    <div className='logo'>
    <img style={{width: "120px", height: "100px"}} src={logo} alt='logo.pic' data-aos='zoom-in-right'/>
    </div>
    <div className={responsive ? "hideMenu": "Menu"}>
        {RoutesPage.map((links, index) => {
            if (links.isNavbarLink) {
           return <Link to={links.path} key={index} data-aos='zoom-in-left'>
                     {links.linkLabel}
                  </Link>   
            }  
        }
        )}
    </div>
    <button  className='toggle' onClick={() => setResponsive(!responsive)}>
    <Menu className='icon' />
    </button>

</div>
    </nav>
  )
}

export default Navbar