import React, { useEffect } from 'react'
import "./attornMain.css"
import Footer from '../footer/Footer'
import Attorney from './Attorney'
import Choose from '../choose/Choose'
import Assist from '../assist/Assist'


const AttornMain = () => {
    useEffect(() => {
        // Scroll to top of the page when the component is rendered
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='attorney_main_page'>
                <h1>Our Attorneys</h1>

            </div>
            <Attorney />
            <Choose />
            <Assist />
            <Footer />


        </>
    )
}

export default AttornMain
