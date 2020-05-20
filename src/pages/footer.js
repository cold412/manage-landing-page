import React from 'react'
import logo from '../img/logo.svg'
import facebook from '../img/icon-facebook.svg'
import youtube from '../img/icon-youtube.svg'
import twitter from '../img/icon-twitter.svg'
import pinterest from '../img/icon-pinterest.svg'
import instagram from '../img/icon-instagram.svg'

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__box1">
                <div className="box1__logo">
               <img src={logo} alt=""/> 
                </div>
                <div className="box1__icons">
                    <a href=""><img src={facebook} alt=""/></a>
                    <a href=""><img src={youtube} alt=""/></a>
                    <a href=""><img src={twitter} alt=""/></a>
                    <a href=""><img src={pinterest} alt=""/></a>
                    <a href=""><img src={instagram} alt=""/></a>
                </div>
            </div>


            <div className="footer__box2">
                <div className="box2__left">
                    <ul>
                        <li><a href=""></a>Home</li>
                        <li><a href=""></a>Pricing</li>
                        <li><a href=""></a>Products</li>
                        <li><a href=""></a>About Us</li>
                    </ul>
                </div>
                <div className="box2__right">
                    <ul>
                        <li><a href=""></a>Careers</li>
                        <li><a href=""></a>Community</li>
                        <li><a href=""></a>Privacy Policy</li>
                    </ul>
                </div>
            </div>



























        </div>
    )
}

export default Footer
