import React, { useRef } from "react";
import {Link, NavLink} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

const ResumeLink=()=>{
    const resumelinkref=useRef(null)
    const resumelink='https://drive.google.com/uc?export=download&id=1c77jJ-3xGe20UDSejolopr_D4vygeSnU';

    const handleClick=()=>{
        resumelinkref.current.click();
    }
    return(
        <li className="nav-item">
            <NavLink
            to={resumelink}
            className="nav-link"
            onClick={handleClick}
            ref={resumelinkref}
            >
                Resume
            </NavLink>
        </li>
    )
}

const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to='/' className='navbar-brand ms-3'>Hanuraag Baskaran</Link>
            <div className="d-flex justify-content-end collapse navbar-collapse">
                <ul className="navbar-nav me-3">
                    <li className="navbar-item">
                        <NavLink exact to='/' className='nav-link' activeClassName='active'>Home</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink exact to='/about' className='nav-link' activeClassName='active'>About</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink exact to='/projects' className='nav-link' activeClassName='active'>Projects</NavLink>
                    </li>
                    <li className="navbar-item">
                        <ResumeLink/>
                    </li>
                    <li className="navbar-item">
                        <NavLink exact to='/contacts' className='nav-link' activeClassName='active'>Contact Me</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;