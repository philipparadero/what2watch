import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import './Navbar.css'
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";

const Navbar = (props) => {

    const [click, setClick] = useState(false);


    const closeMobileMenu = () => {
        setClick(false);
    }

    const handleClick = () => {
        setClick(!click)
    }

    // const onFormSubmit = (term) => {
    //     console.log("from search js", term)
    // }
 

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                        <h1 className="navbar-logo">What2Watch</h1>
                    </Link>

                    <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                        <li className="nav-item">
                            <Link to='/toprated' className="nav-links" onClick={closeMobileMenu}>Top Rated</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to='/reviews' className="nav-links" onClick={closeMobileMenu}>Reviews</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to='/upcoming' className="nav-links" onClick={closeMobileMenu}>Upcoming</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to='/mypicks' className="nav-links" onClick={closeMobileMenu}>My Picks</Link> 
                        </li>
                    </ul>
                  <Link to='/searchresults'><Search onFormSubmit={props.onFormSubmit}/></Link>
                  <div className='menu-icon' onClick={handleClick}>
                        {click ? <BiX /> : <BiMenu />}
                    </div>
                </div>
            </nav>
       
        </>
    )
}

export default Navbar
