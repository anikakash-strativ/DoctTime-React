import React, { useState } from 'react';
import './Header.css';
import '../../reUsableStyle.css';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";



export default function Header() {

    const [menuToggle, setMenuToggle] = useState(false);
    const [currentTab, setCurrentTab] = useState("home")
    const responsiveMenu = `nav-link ${menuToggle ? "toggle-menu" : ''}`

    
    const handleToggle = () => {
        console.log("menus toggled.", menuToggle);
        setMenuToggle(!menuToggle);
    }

    const handleActiveMenu = (e) =>{
        let targetId = e.target.id || e.target.parentNode.id;
        if(currentTab !== targetId) setCurrentTab(targetId);
    }



  return (
    <>
    <div className="container stickydiv">
      <nav className="navbar flex-between">
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="menu">
        <ul className={responsiveMenu}>
            <li id = "home" onClick={handleActiveMenu} className={currentTab === "home" && `active`}>Home</li>
            <li id = "doctor" onClick={handleActiveMenu} className={currentTab === "doctor" && `active`}>Find a doctor</li>
            <li id = "app" onClick={handleActiveMenu} className={currentTab === "app" && `active`}>Apps</li>
            <li id = "testimonial" onClick={handleActiveMenu} className={currentTab === "testimonial" && `active`}>Testimonials</li>
            <li id = "about" onClick={handleActiveMenu} className={currentTab === "about" && `active`}>About us</li>
          </ul>

          {
            menuToggle ? <FaXmark className='menuicon' onClick={handleToggle}/>
            : <FaBars className='menuicon' onClick={handleToggle}/> 
            
          }

        </div>
      </nav>
    </div>
    </>
  )
}
