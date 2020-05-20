import React from "react"
import logo from "../img/logo.svg"
import hamburger from "../img/icon-hamburger.svg"
import close from "../img/icon-close.svg"

const Navbar = ({ data }) => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo} alt="Logo" />
        <img id="ham" src={hamburger} alt="hamburger" />
        <img id="close" src={close} alt="close" />
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
      <div className="btn">
        <h5>Get Started</h5>
      </div>
    </div>
  )
}

export default Navbar
