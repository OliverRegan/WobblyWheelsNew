// React & React components
import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

// Components
import TopNav from "../topNav/TopNav"
import Footer from "../footer/Footer"

// Hooks
import useWindowDimensions from '../hooks/getWindowDimensions'


// Css
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = props => {

    // Top nav menu adjustments 
    // width of page
    let width = useWindowDimensions().width

    // Menu state
    const [menu, setMenu] = useState()


    useEffect(() => {
        if (width > 930) {
            setMenu(true);
        } else if (width < 930) {
            setMenu(false);
        }
    }, [])

    return (
        <div className='bg-dark'>
            <TopNav setMenu={setMenu} menu={menu}/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout