import React, { useEffect } from 'react'
import Question from '../questions/Question'
import Attorney from '../attorneys/Attorney'
import Choose from '../choose/Choose'
import Assist from '../assist/Assist'
import Footer from '../footer/Footer'
import "./servicesMain.css"
import Services from './Services'

const ServicesMain = () => {
    useEffect(() => {
        // Scroll to top of the page when the component is rendered
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='services_main_page'>
                <h1>Our Services</h1>

            </div>
            <Services />

            <Question />
            <Attorney />
            <Choose />
            <Assist />
            <Footer />


        </>
    )
}

export default ServicesMain
