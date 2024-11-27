import React from 'react'
import "./ques.css"
import { Link } from "react-router-dom"
const Question = () => {
    return (
        <div className='quest-main'>
            <div className='quest-left'>

                <h6><span id='clr-rght'>|</span>Any Questions??  </h6>
                <h1>If You have any legal issues in your life, <span>Feel Free To Consulation</span></h1>
                <p>If you're dealing with any legal issues in your life, feel free to contact us for a thorough, confidential consultation and expert advice.</p>
                <Link to="/contact">
                    <button>Contact Us</button>
                </Link>
            </div>
            <div className='quest-right'>
                <img src='/images/wom.webp' />

                <div className='text-div-right'>

                    <div className='blankCoverDiv'>.</div>
                    " Lawyers are not just legal experts; they are advocates for justice, ensuring that every individual’s rights are protected and upheld with integrity and dedication. <br />

                    Barack Obama, 44th U.S. President
                </div>
            </div>
        </div>
    )
}

export default Question
