import React from 'react'
import Navbar from "./navbar"
import Page1 from "./page1"
import Page2 from "./page2"
import Page25 from "./page25"
import Page3 from "./page3"
import Page35 from "./page35"
import Page45 from "./page45"
import Footer from "./footer"
import "../styles/navbar.scss"
import '../styles/index.scss'
import '../styles/page1.scss'
import '../styles/page2.scss'
import '../styles/page25.scss'
import '../styles/page3.scss'
import '../styles/page35.scss'
import '../styles/page45.scss'
import '../styles/footer.scss'



const index = () => {
    return (
        <div>
            <Navbar/>
            <Page1/>
            <Page2/>
            <Page25/>
            <Page3/>
            <Page35/>
            <Page45/>
            <Footer/>
        </div>
    )
}

export default index
