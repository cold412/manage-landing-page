import React from 'react'
import Navbar from "./navbar"
import Page1 from "./page1"
import "../styles/navbar.scss"
import '../styles/index.scss'
import '../styles/page1.scss'



const index = () => {
    return (
        <div>
            <Navbar/>
            <Page1/>
        </div>
    )
}

export default index
