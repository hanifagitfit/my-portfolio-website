import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import menu from '../icons/icon-menu.svg'
import close from '../icons/icon-close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
    const [mobile,setMobile]= useState(false);
    
//Assign location variable
const location= useLocation();

//Destructuring pathname from location
const {pathname} = location;

//use javascript split method to get the name of the path in array
const splitLocation=pathname.split("/");
    return (
        <div>
            <header>
                <nav className="navbar">
                    <ul className={mobile ? 'nav-links': 'ul'} onClick={()=>setMobile(false)} >
                        <li className={ splitLocation[1] ===""? "active":"" }>
                            <Link to="/">Home</Link></li>
                        <li className={splitLocation[1] === "project"? "active" : ""}>
                            <AnchorLink href="#project">My projects</AnchorLink></li>
                        <li className={splitLocation[1]=== "skill"? "active": ""}>
                            <AnchorLink href="#skill">Skills</AnchorLink></li>
                        <li className={splitLocation[1] === "more"? "active": ""}>
                            <Link to="/more">About me</Link></li>
                        <li id='contact'>
                            <Link to="/contact" className='con'>Contact Me</Link></li>
                    </ul>
                    <div className="burger" onClick={()=>setMobile(!mobile)}>
                        {mobile ?(
                            <img src={close} className="menue" alt="close" />):(
                            <img src={menu} className="menue" alt="burger" />)
                        }
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Navbar
