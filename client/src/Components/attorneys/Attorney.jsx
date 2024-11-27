import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useLocation, Link } from "react-router-dom"
import './attorney.css';

const Attorney = () => {
    const { pathname } = useLocation();
    const isAttorneyOnAboutPage = pathname === "/about"
    const isAttorneyOnServicePage = pathname === "/services"
    const isAttorneyOnAttorneyPage = pathname === "/attorneys"
    const cardData = [
        { id: 1, name: "Kelin Masket", designation: "Criminal Lawyer", img: "/images/cardOne.webp" },
        { id: 2, name: "Mully Helman", designation: "Criminal Lawyer", img: "/images/cardTwo.webp" },
        { id: 3, name: "Helmum Jakson", designation: "Criminal Lawyer", img: "/images/cardThree.webp" }
    ];

    const cardRefs = useRef([]);

    const hoverStart = (index) => {
        const spanDiv = cardRefs.current[index].querySelector(".span-here");

        gsap.to(spanDiv, {
            y: 50,
            // delay: 1,
            duration: 0.8,
            opacity: 1,
            ease: "power2.out"

        })

    }
    const hoverEnd = (index) => {
        const spanDiv = cardRefs.current[index].querySelector(".span-here");
        gsap.to(spanDiv, {
            y: -30,
            // delay: 1,
            duration: 0.5,
            opacity: 0,
            ease: "power2.in"

        })
    }

    return (
        <div className={`attorney-main ${isAttorneyOnServicePage ? "attoAdjust" : ""} ${isAttorneyOnAttorneyPage ? "attorneyAdjustForAttorneyPage" : ""} ${isAttorneyOnAboutPage ? "attorneyAdjustForAboutPage" : ""}`}>
            <div className='attorney-top'>
                <div className='attorney-heading'>
                    <h6>Expert Attorneys</h6>
                    <h1>Meet Our <span> Expert Attorneys</span></h1>
                    <p>Introducing our dedicated attorneys, committed to delivering expert legal solutions.</p>
                </div>
                <div className='attorney-btn'>
                    <Link to="/attorneys">
                        <button>View All Attorneys</button>
                    </Link>
                </div>
            </div>

            <div className='attorney-cards'>
                {cardData.map((card, index) => {
                    return (
                        <Link to={`/attorney/${card.id}`} style={{ textDecoration: 'none' }}>
                            <div ref={(el) => cardRefs.current[index] = el} className='img_card_main' onMouseEnter={() => hoverStart(index)} onMouseLeave={() => hoverEnd(index)} key={card.id} >
                                <span className="span-here">
                                    <i className={`ri-twitter-line ${isAttorneyOnServicePage ? "iconAdjust" : ""} ${isAttorneyOnAttorneyPage ? "iconAdjustForAttorneyPage" : ""} ${isAttorneyOnAboutPage ? "iconAdjustForAboutPage" : ""}`}></i>
                                    <i className={`ri-facebook-line ${isAttorneyOnServicePage ? "iconAdjust" : ""} ${isAttorneyOnAttorneyPage ? "iconAdjustForAttorneyPage" : ""} ${isAttorneyOnAboutPage ? "iconAdjustForAboutPage" : ""}`}></i>
                                    <i className={`ri-instagram-line ${isAttorneyOnServicePage ? "iconAdjust" : ""} ${isAttorneyOnAttorneyPage ? "iconAdjustForAttorneyPage" : ""} ${isAttorneyOnAboutPage ? "iconAdjustForAboutPage" : ""}`}></i>
                                    <i className={`ri-linkedin-line ${isAttorneyOnServicePage ? "iconAdjust" : ""} ${isAttorneyOnAttorneyPage ? "iconAdjustForAttorneyPage" : ""} ${isAttorneyOnAboutPage ? "iconAdjustForAboutPage" : ""}`}></i>
                                </span>
                                <div className='back'>

                                </div>

                                <div className='img_box'>
                                    <img src={card.img} alt={card.name} />
                                </div>
                                <div className='name_box'>
                                    <h5>{card.name}</h5>
                                    <h6>{card.designation}</h6>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div >
    );
}

export default Attorney;
