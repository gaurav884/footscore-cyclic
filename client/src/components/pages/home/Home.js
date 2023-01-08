import React, { useState } from 'react'
import Carousel from "./Carousel"
import { FaChevronCircleDown } from "react-icons/fa";
import Navbar from "../../navbar/Navbar"
import Footer from "../../footer/Footer"


import Features from "./Features"


const Home = () => {
    const [extended, setExtended] = useState(false);

   

    return (
        <>
            <Navbar />
            <div className="caraousel-outer-container">
            <Carousel />
            </div>
            


            <div className="widget-container">
                <h1 className="widget-heading">LiveScores / Fixtures</h1>
                <div className={(extended) ? "score-widget-wrapper load-more" : "score-widget-wrapper"}>
                    <iframe className="score-widget" src="https://www.scorebat.com/embed/livescore/" className="_scorebatEmbeddedPlayer_"></iframe>
                </div>

                <FaChevronCircleDown className={(extended) ? "extending-button-up" : "extending-button-down"} onClick={() => {
                    setExtended(!extended);
                }} />

            </div>

            <Features />

            <Footer />




        </>

    )
}

export default Home
