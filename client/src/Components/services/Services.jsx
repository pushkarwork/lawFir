import React from 'react'
import "./services.css"
import { Link } from "react-router-dom"

const Services = () => {
    const practiceCardsData = [{
        id: 1, name: "Criminal Law", data: "Protecting your rights with expert defense in criminal law matters and legal proceedings.", icon: <i class="ri-team-fill"></i>
    },
    {
        id: 2, name: "Business Law", data: "Providing strategic legal guidance to ensure your business’s growth and compliance. ", icon: <i class="ri-shake-hands-line"></i>
    },
    {
        id: 3, name: "Family Law", data: "Compassionate and effective solutions for family matters, including divorce, custody, and support.", icon: <i class="ri-group-line"></i>
    },
    {
        id: 4, name: "Personal Injury", data: "Fighting for justice and compensation for those injured due to accidents or negligence. ", icon: <i class="ri-p2p-line"></i>
    },
    {
        id: 5, name: "Education Law", data: "Ensuring rights and fairness in education-related legal matters for students and institutions.", icon: <i class="ri-graduation-cap-line"></i>
    },
    {
        id: 6, name: "Real Estate Law", data: "Expert legal advice for real estate transactions, disputes, and property-related issues.", icon: <i class="ri-community-line"></i>
    }]
    return (
        <div className='services-main'>
            <h6>Our Services</h6>
            <h1>The Legal <span>Practise Areas</span> </h1>
            <p>Our legal practice areas provide expert solutions across various fields, tailored to meet your specific needs.</p>

            <div className='cards-practice'>
                {practiceCardsData.map((card) => (
                    <div className="card" key={card.id}>
                        <div className="icon">
                            {card.icon}
                        </div>
                        <h3>{card.name}</h3>
                        <p>{card.data}</p>
                    </div>
                ))}
            </div>


            <Link to="/services">
                <button>View All Services</button>
            </Link>
        </div>
    )
}

export default Services
