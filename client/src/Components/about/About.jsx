import React from 'react'
import "./about.css"
import { Link, useLocation } from "react-router-dom"

const About = () => {
    const { pathname } = useLocation();

    const isAboutPage = pathname === "/about"

    return (
        <div className={`about-main ${isAboutPage ? "aboutMainAdjust" : ""} `} >
            <div className='about-left'>

                <div className='imgBoxFirst'>
                    <img src='/images/lawyerSecond.webp' />
                    <div className='knowDiv'>
                        <p>Know More</p>
                        <Link className='playIcons' to="/services">
                            <span className='playIcon' >
                                <i class="ri-play-circle-line"></i>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='imgBoxRight'>
                    <p>Journey Since <span>2000</span></p>
                    <div className='ExpDiv'>
                        <div><i class="ri-medal-fill"></i></div>
                        <div id='num'>24</div>
                        <div id='num2'>Years Of Experiences In Company</div>
                        <div className='spanDiv'><span id='clr'>|</span><div>Decades of proven success in delivering exceptional service.</div></div>
                    </div>
                </div>

            </div>

            <div className='about-right'>

                <h6><span id='clr-rght'>|</span>Get To Know Us  </h6>
                <h1>Welcome to Lawberg <span>Attornery & Law</span> Firm</h1>
                <p>Your trusted partner in navigating the complexities of law with expertise and care.</p>
                <p>Committed to delivering reliable, effective, and innovative legal solutions that are carefully tailored to meet your unique needs and ensure your success.</p>
                <div className='sign-div'>
                    <div className='sign-div-left'>
                        <p>Providing expert guidance and personalized strategies for your legal success.</p>
                        <img src='/images/sign.webp'></img>

                    </div>
                    <div className='sign-div-right'>
                        <ul>
                            <li className='list-item'><i class="ri-auction-line"></i>Expert Legal Guidance</li>
                            <li className='list-item'><i class="ri-auction-line"></i>Tailored Solutions</li>
                            <li className='list-item'><i class="ri-auction-line"></i>Reliable Service</li>
                            <li className='list-item'><i class="ri-auction-line"></i>Focused on Success</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <Link to="/attorneys">

                    <button >Learn More</button>
                </Link>
            </div>

        </div >
    )
}

export default About
