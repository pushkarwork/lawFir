import React from 'react'
import "./cstudy.css"
const Cstudy = () => {

    const cardDetails = [{ id: 1, img: "/images/firstCard.webp", department: "Corporate Law ", category: "Financial" },
    { id: 2, img: "/images/secondCard.webp", department: "Personal Injury Law", category: "Injuries" },
    { id: 3, img: "/images/thirdCard.webp", department: "Constitutional Law", category: "Politics" },
    { id: 4, img: "/images/FourthCArd.webp", department: "Education Law", category: "Graduation" },
    { id: 5, img: "/images/fifthCard.webp", department: "Real Estate Law", category: "Construction" },
    { id: 6, img: "/images/sixthCard.webp", department: "Personal Injury Law", category: "Injuries" }
    ]

    return (

        <>
            <div className='Cstudy_main'>
                <div className='study_inside'>
                    <h6> Case Study</h6>
                    <h1>Our Populars Case Study</h1>
                    <p>Explore our successful case studies showcasing expert legal solutions and proven results.</p>
                </div>
            </div>
            <div className='Cstudy_bottom_Cards'>

                {cardDetails.map((card) => {
                    return <div className='Cstudy_card_single_card' key={card.id}>
                        <img src={card.img} />
                        <div className='Card_detail'>
                            <h5>{card.category} </h5>
                            <h3>{card.department}</h3>
                        </div>


                    </div>
                })}
            </div>

            <div className='jdk'></div>
        </>
    )
}

export default Cstudy
