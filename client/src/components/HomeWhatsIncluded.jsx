import React from 'react'
import '../styles/HomeWhatsIncluded.scss'
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BiSolidDollarCircle } from 'react-icons/bi';


const HomeWhatsIncluded = () => {
  return (
    <section className='whatsincludedContainer'>
         <div className="cancellationSubContainer">
            <h1>Cancellation policy</h1>
            <div className="content">
                <BiSolidDollarCircle  />
                <p>No refund or Cancellation are allowed once purchased.</p>
            </div>
        </div>
        <div className="whatsincludedSubContainer">
            <h1>Inclusions</h1>
            <ul className="content">
                <li>Round-trip Penang funicular train ride</li>
            </ul>
            <ul className="content">
                <li>Normal lane or fast lane access</li>
            </ul>
                
        </div>
        <div className="whatsNotincludedSubContainer">
        <h1>Exclusions</h1>
        <div className="contentContainer">
        <ul className="content">
                <li>Admission to other attractions</li>
            </ul>
            <ul className="content">
                <li>Parking</li>
            </ul>
        </div>
        </div>
    </section>
  )
}

export default HomeWhatsIncluded