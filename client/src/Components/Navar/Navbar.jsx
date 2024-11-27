import React from 'react'
import { Link, useLocation } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
    const { pathname } = useLocation();
    // console.log(pathname)
    // Function to handle navbar collapse after clicking a link
    const handleNavLinkClick = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        // Check if the navbar is expanded, if so, click the toggler to collapse
        if (navbarToggler && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    };
    const isHomePage = pathname === '/';
    const isAboutPage = pathname === '/about';
    const isServicesPage = pathname === '/services';
    const isAttorneysPage = pathname === '/attorneys';
    const isContactPage = pathname === '/contact';
    // console.log(isHomePage)
    return (

        <nav className={`navbar ${isHomePage ? "fixed" : "static"} navbar-expand-lg`} >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className='un-list'>

                            <li className="nav-item">
                                <Link className={`nav-link ${isHomePage ? "active" : ""} `} aria-current="page" to="/" onClick={handleNavLinkClick}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isAboutPage ? "active" : ""} `} aria-current="page" to="/about" onClick={handleNavLinkClick}>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isServicesPage ? "active" : ""} `} aria-current="page" to="/services" onClick={handleNavLinkClick}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isAttorneysPage ? "active" : ""} `} aria-current="page" to="/attorneys" onClick={handleNavLinkClick}>Attorneys</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isContactPage ? "active" : ""} `} aria-current="page" to="/contact" onClick={handleNavLinkClick}>Contact</Link>
                            </li>
                        </div>
                        <div className='HelpDiv'>
                            <span className="material-symbols-outlined">
                                phone_in_talk
                            </span>
                            <div className='HelpDivChild'>
                                <p>Need Help? Let's talk <br /><span>(110) 123-1235</span></p>
                            </div>
                        </div>
                    </ul>

                </div>

            </div>
        </nav >

    )
}

export default Navbar
