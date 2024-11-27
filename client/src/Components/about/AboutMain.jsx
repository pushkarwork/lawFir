import React, { useEffect } from 'react'
import About from './About'
import "./aboutmain.css"
import Question from '../questions/Question'
import Attorney from '../attorneys/Attorney'
import Choose from '../choose/Choose'
import Assist from '../assist/Assist'
import Footer from '../footer/Footer'
const AboutMain = () => {
    useEffect(() => {
        // Scroll to top of the page when the component is rendered
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='About_main_page'>
                <h1>About Us</h1>

            </div>

            <About />
            <Question />
            <Attorney />
            <Choose />
            <Assist />
            <Footer />
        </>
    )
}

export default AboutMain
