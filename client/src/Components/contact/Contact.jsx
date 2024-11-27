import React from 'react'
import "./contact.css"
import { useState } from 'react'
import { useLocation } from "react-router-dom"
const Contact = () => {

    const { pathname } = useLocation();

    const isContactPage = pathname === "/contact"

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);

        try {
            const response = await fetch('http://localhost:7400/data/formData', {
                method: 'POST', // The HTTP method to use
                headers: {
                    'Content-Type': 'application/json', // Ensure the server knows the request is JSON
                },
                body: JSON.stringify(formData), // Convert formData object to JSON
            });

            // Handle the response
            if (response.ok) {
                const result = await response.json();
                console.log('Form data submitted successfully:', result);
                // Handle success (e.g., show success message)
            } else {
                const error = await response.json();
                console.error('Error submitting form:', error);
                // Handle error (e.g., show error message)
            }
        } catch (error) {
            console.error('Network error:', error);
            // Handle network errors (e.g., server is down)
        }
    };

    return (
        <div className={`contact_main ${isContactPage ? "ContactAdjust" : ""}`}>

            <div className='Contact_form_div'>
                <h6>Feel Free</h6>
                <h2>Get A Free <span> Consulation</span></h2>
                <p>Take the first step towards justice with a free consultation from our experienced legal team today.</p>
                <div className='form_inner_div'>
                    <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                            />
                        </div>
                        {/* Phone Number */}
                        <div className="form-group">
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                required
                            />
                        </div>
                        {/* Email Address */}
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        {/* Subject */}
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                            />
                        </div>
                        {/* Message */}
                        <div className="form-group texta">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows="5"
                                required
                            />
                        </div>
                        {/* Submit Button */}
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
            <div className='map_main_div'>


                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14021.326460739461!2d77.20389799402633!3d28.52975060550986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f0adb989f9%3A0xd7b634f1086a782c!2sDistrict%20Court%20Saket!5e0!3m2!1sen!2sin!4v1732340172494!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    )
}

export default Contact
