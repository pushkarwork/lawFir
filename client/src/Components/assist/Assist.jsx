import React from 'react'
import "./assist.css"
import { Link } from "react-router-dom"
const Assist = () => {
    return (
        <div className='assist_main'>
            <div className='assist_inside'>

                <h1>Ready To Assist You In Resolving <span> Legal Issues You May Have </span></h1>
                <p>We are ready to assist you in resolving any legal issues with expert guidance and personalized, effective solutions tailored to your needs.</p>
                <Link to="/contact">
                    <button className='ApptBtn'>Make an Appointment</button>
                </Link>
            </div>

        </div>
    )
}

export default Assist
