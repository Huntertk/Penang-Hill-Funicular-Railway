import React from 'react'
import '../styles/homeTopContainer.scss'
import image from '../assets/images/homeMain.jpg'

const HomeTopContainer = () => {

  return (
    <section className='HomeTopContainer'>
        <div className="content">
            <h1>Book Penang Hill Funicular Railway Ticket </h1> 
            <p>(For Non-Malaysian Only)</p>
            <p>Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction.</p>
        </div>
        <div className="homeTopImgContainer">
            <img src={"https://i.postimg.cc/mgbQ21yB/D8k-DCQy-Sbmdj14no-Y5-Vg-funicular-railway.jpg"} alt="" />
        </div>
    </section>
  )
}

export default HomeTopContainer