import React, { useEffect } from 'react'
import "./contactmainpage.css"
import Contact from './Contact'
import Choose from '../choose/Choose'
import Assist from '../assist/Assist'
import Footer from '../footer/Footer'

const ContactMain = () => {
    useEffect(() => {
        // Scroll to top of the page when the component is rendered
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='contact_main_page'>
                <h1>Contact Us</h1>

            </div>
            <Contact />
            <Choose />
            <Assist />
            <Footer />


        </>
    )
}

export default ContactMain
