import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Cart, Search } from 'react-bootstrap-icons';


function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark  border-bottom shadow bg-info">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link text-dark">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/product' className="nav-link text-dark">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link text-dark">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <a href="">
                                <img src="img/logo.png" alt="" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link text-dark">Markets</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link text-dark">Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link text-dark">content</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}


export default Header;