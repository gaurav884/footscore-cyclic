import React, { useEffect, useState } from 'react'
import {useHistory } from "react-router-dom"


const TopScorers = (props) => {
    const history = useHistory();
    const [topSorers, setTopSorers] = useState([])
    useEffect(() => {

        fetchItems()

    }, [])

    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = async () => {

        try {
            const response = await fetch(`https://api-football-beta.p.rapidapi.com/players/topscorers?season=2022&league=${props.leagueId}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
                    "x-rapidapi-key": "a299d229bamsh6420a099566ec81p147e9ejsn4d9a39597510"
                }
            })

            const data = await response.json();

            setTopSorers(data.response.slice(0, 10));
        }
        catch (err) {
            console.log(err);
            history.push("/ERROR505/doifgjdof34trgjdio234532fsdjgiodhgiodhgf")
        }

    }


    if (topSorers == undefined) {
        return <></>
    }



    return (

        <>
            {topSorers.map((each, index) => {
                return (
                    <div className="top-scorer-container" key={index}>
                        <div className="top-scorer-card-container">
                            <div className="scorer-position">
                                <h2>{index + 1}.</h2>
                            </div>
                            <div className="player-image-container">

                                <img className="player-image" src={each.player.photo} />
                            </div>

                            <div className="player-info">
                                <h3> {each.player.name}</h3>
                                <p>Team : {each.statistics[0].team.name}</p>
                                <p>Goals : {each.statistics[0].goals.total}</p>
                            </div>

                        </div>
                    </div>

                )
            })}


        </>
    )
}

export default TopScorers
