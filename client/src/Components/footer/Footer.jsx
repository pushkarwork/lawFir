import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div className='footer_main'>
            <div className='footer_inside_first'>
                <h1>LAW OFFICE</h1>
                <p>Trusted legal experts committed to your success and protection.</p>
                <p>Dedicated to delivering results-driven legal solutions for every client.</p>

            </div>
            <div className='footer_inside_second'>
                <h2>Quick Link</h2>
                <p>About Us</p>
                <p>Services</p>
                <p>Attorneys</p>
                <p>Contact Us</p>
            </div>
            <div className='footer_inside_third'>
                <h2>Contact Us</h2>
                <p>Get in touch for expert legal advice and personalized support</p>
                <div className='address_main'>
                    <i className="ri-map-pin-line foot-Icon"></i>
                    <p >256 Saket Dist. Court, New Delhi</p>
                </div>
                <div className='phone_main'>
                    <i className="ri-phone-fill foot-Icon"></i>
                    <p>+91 98104-98104</p>
                </div>
                <div className='email_main'>
                    <i className="ri-mail-send-fill foot-Icon"></i>
                    <p>info@lawoffices.com</p>
                </div>


            </div>
            <div className='footer_inside_fourth'>
                <p>2022 Law Offices. All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer
