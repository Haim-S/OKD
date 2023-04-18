import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import {Menu} from "@mui/icons-material"
import {RoutesPage} from "../../../pages/index";
import logo from "../../../images/logo_web.png"
import {NavbarTag} from "./NavbarStyle";

const Navbar = () => {

  const [responsive, setResponsive] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const regex = /^\/Images\/[^/]+\/[^/]+$/;
  const isMatch = regex.test(path);
  
    return (
    <NavbarTag location={isMatch}>
    <div className='container flexsb'>
    <div className='logo'>
      <Link to={"/ControlPage"}>
    <img style={{width: "100px", height: "80px", marginTop: "8px"}} src={logo} alt='logo.pic' data-aos='zoom-in-right'/>
      </Link>
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
    </NavbarTag>
  )
}

export default Navbar