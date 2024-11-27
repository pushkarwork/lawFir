import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import "./singAtt.css"

const SingleAttorney = () => {
    useEffect(() => {
        // Scroll to top of the page when the component is rendered
        window.scrollTo(0, 0);
    }, []);
    const cardData = [
        { id: 1, name: "Kelin Masket", designation: "Criminal Lawyer", img: "/images/cardOne.webp" },
        { id: 2, name: "Mully Helman", designation: "Criminal Lawyer", img: "/images/cardTwo.webp" },
        { id: 3, name: "Helmum Jakson", designation: "Criminal Lawyer", img: "/images/cardThree.webp" }
    ];

    // Get the id from the URL params
    const { id } = useParams(); // id will be a string, so we'll need to parse it

    // Use filter to find the attorney based on the id from the URL
    const attorneys = cardData.filter((attorney) => attorney.id === parseInt(id));

    // Since filter returns an array, we check if any attorney was found
    const attorney = attorneys.length > 0 ? attorneys[0] : null;

    // If the attorney isn't found, show an error message or fallback UI
    if (!attorney) {
        return <div>Attorney not found</div>;
    }

    return (
        <div className='SingleAttorney_main_div' style={{ backgroundImage: `url(${attorney.img})` }}>
            <div className='img_text_container'>
                <div className='imgContainer_left'>
                    <img src={attorney.img} />
                </div>
                <div className='textContainer_right'>
                    <h1>{attorney.name}</h1>
                    <h4>{attorney.designation}</h4>
                    <p>{attorney.name} is a highly qualified attorney with an exceptional academic background. He graduated with honors from University Name, earning his Degree in Law. His commitment to excellence is demonstrated by his continuous pursuit of legal knowledge through advanced courses, seminars, and certifications. </p>
                    <p>With a deep understanding of both theoretical and practical aspects of law, {attorney.name} is well-equipped to handle complex legal matters with skill and professionalism.</p>
                </div>
            </div>
        </div>
    );
};

export default SingleAttorney;
