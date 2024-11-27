import React from 'react'
import "./home.css"
import About from '../about/About'
import Services from '../services/Services'
import Question from '../questions/Question'
import Attorney from '../attorneys/Attorney'
import Cstudy from '../caseStudy/Cstudy'
import Contact from '../contact/Contact'
import Choose from '../choose/Choose'
import Assist from '../assist/Assist'
import Footer from '../footer/Footer'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <div>
                <div className='mainContainer'>
                    <div className='MainContainer_Text'>
                        <div className='MainContainer_heading'>Best Law Firm</div>
                        <div className='MainContainer_MainHeading'>We Have Reliable & Efficient Legal Solutions</div>
                        <div className='MainContainer_smalltext'>Dedicated to providing dependable, swift, and effective legal solutions tailored to your needs and goals.</div>
                        <div className='MainContainer_Buttons'>
                            <Link to="/about">
                                <button className="btn">Discover Us</button>
                            </Link>
                            <Link to="/contact">
                                <button className='btn' id='btnSecond'>Make an apppointment</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='IconBoxContainer'>
                    <div className='IconBox'>
                        <span className=" homeIcons material-symbols-outlined ">
                            currency_rupee
                        </span>
                        <h4>Competitive Pricing</h4>
                        <p>Affordable legal services without compromising quality, ensuring the best value for your investment.</p>
                    </div>
                    <div className='IconBox' id='secondBox'><span className="material-symbols-outlined homeIcons">
                        trophy
                    </span>
                        <h4>100% Winning Guarantee</h4>
                        <p>We stand by our promise to deliver results, offering a commitment to your success and satisfaction.</p></div>

                    <div className='IconBox'><span className="material-symbols-outlined homeIcons">
                        stacks
                    </span>
                        <h4>Quick & Positive Result</h4>
                        <p>Fast, efficient legal solutions designed to achieve the best possible outcome in the shortest time.</p></div>

                </div>

            </div>
            <About />
            <Services />
            <Question />
            <Attorney />
            <Cstudy />
            <Contact />
            <Choose />
            <Assist />
            <Footer />
        </>
    )
}

export default Home
