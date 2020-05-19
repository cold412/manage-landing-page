import React from 'react'
import Navbar from "./navbar"
import Page1 from "./page1"
import Page2 from "./page2"
import "../styles/navbar.scss"
import '../styles/index.scss'
import '../styles/page1.scss'
import '../styles/page2.scss'



const index = () => {
    return (
        <div>
            <Navbar/>
            <Page1/>
            <Page2/>
        </div>
    )
}

export default index
