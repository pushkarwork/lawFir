import React from 'react'
import "./choose.css"
import { Link } from "react-router-dom"
const Choose = () => {
    return (
        <div className='choose_main'>
            <div className='choose_left'>
                <div className='choose_left_img_box'>
                    <img src='/images/study.jpg' />
                </div>
                <div className='below_image_box'>
                    <h4>Easy Acces To Affordable Any Legal Solutions</h4>
                    <hr />
                    <Link to="/about">
                        <button className='ExplorBtn'> Explore More</button>
                    </Link>
                </div>

            </div>
            <div className='choose_right'>


                <h5>Why To Choose Us</h5>
                <h1>We are experience in professional <span> law & Legal</span></h1>
                <p>We bring extensive experience in professional law and legal services, delivering expert solutions for every case.</p>
                <p>With years of expertise in professional law and legal services, we provide comprehensive, tailored solutions to address your unique legal challenges, ensuring the best possible outcomes for every client and case.</p>

                <div className='mission_box'>
                    <div className='mission_box_left'>

                        <h5> Our Mission</h5>
                        <p>Our mission is to provide expert legal solutions with integrity, dedication, and a client-centered approach.</p>
                    </div>

                    <div className='mission_box_right'>
                        <ul>
                            <li className='list-item choose'><i className="ri-auction-line"></i>Client-Focused Solutions</li>
                            <li className='list-item choose'><i className="ri-auction-line"></i>Commitment to Integrity</li>
                            <li className='list-item choose'><i className="ri-auction-line"></i>Legal Expertise Delivered</li>
                            <li className='list-item choose'><i className="ri-auction-line"></i>Dedicated to Results</li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Choose
