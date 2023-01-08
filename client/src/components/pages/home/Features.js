import React from 'react'
import { Link } from "react-router-dom"

const features = () => {
    return (
        <>

            <div className="features-container">
                <Link to="/highlights">
                    <div className="highlights-card feature-card">
                        <h2>Highlights</h2>

                        <div className="highlights-card-imagecontainer">
                            <img src="./highlights-card.jpg" alt="highlights-card"></img>
                        </div>

                        <p>Get all the recent highlights from the world's top 5 leagues</p>

                    </div>
                </Link>
                
                <Link to="/leagues">

                    <div className="leagues-card feature-card">
                        <h2>Leagues</h2>
                        <div className="leagues-card-imagecontainer ">
                            <img src="./leagues-card.jpg" alt="leagues-card"></img>
                        </div>

                        <p>Get all the information about the league's standings and top scorer etc.</p>
                    </div>

                </Link>
                <Link  to="/stats">
                    <div className="player-card feature-card">
                        <h2>Players & Teams</h2>
                        <div className="leagues-card-image-container">
                            <img src="./player-card.jpg" alt="player-card"></img>
                        </div>

                        <p>Get your player's bio and stats of the season</p>
                    </div>
                </Link>


            </div>
        </>
    )
}

export default features
