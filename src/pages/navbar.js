import React from 'react';
import logo from '../img/logo.svg';

const Navbar = ({ data }) => {

    return (
        <div className="nav">
            <div className="nav__logo">
            <img src={logo} alt="Logo" />
            </div>
            <div className="nav__menu">
                <ul>
                    <li>
                        <a href="#">Pricing</a>
                        <a href="#">Product</a>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">Community</a>
                    </li>
                </ul>
            </div>
  Get Starte
        </div>
    )
}

export default Navbar




