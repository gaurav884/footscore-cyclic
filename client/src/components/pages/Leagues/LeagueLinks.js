import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PremierLeague from "./PremierLeague"
import SerieA from "./SerieA"
import Bundesliga from "./Bundesliga"
import Laliga from "./Laliga"
import Ligue1 from "./Ligue1";


const LeagueLinks = () => {

    const [premireLeague, setPremireLeague] = useState("league-links")
    const [serieA, setSerieA] = useState("league-links")
    const [ligueOne, setLigueOne] = useState("league-links")
    const [bundesliga, setBundesliga] = useState("league-links")
    const [laliga, setLaliga] = useState("league-links")


    function clicked(e) {
        const id = e.target.id;
        if (id === "pl") {
            setPremireLeague("league-links selected")
            setSerieA("league-links")
            setBundesliga("league-links")
            setLaliga("league-links")
            setLigueOne("league-links")
        }
        if (id === "sa") {
            setSerieA("league-links selected")
            setBundesliga("league-links")
            setLaliga("league-links")
            setPremireLeague("league-links")
            setLigueOne("league-links")
        }
        if (id === "l") {
            setLigueOne("league-links selected")
            setSerieA("league-links")
            setBundesliga("league-links")
            setPremireLeague("league-links")
            setLaliga("league-links")

        }
        if (id === "ll") {
            setLaliga("league-links selected")
            setSerieA("league-links")
            setBundesliga("league-links")
            setPremireLeague("league-links")
            setLigueOne("league-links")
        }
        if (id === "bu") {
            setBundesliga("league-links selected")
            setSerieA("league-links")
            setLaliga("league-links")
            setPremireLeague("league-links")
            setLigueOne("league-links")
        }

    }


    return (
        <>
            <Router>
                <div className="links-container">
                    <Link id="pl" onClick={clicked} className={premireLeague} to="/leagues">Premier League</Link>
                    <Link id="l" onClick={clicked} className={ligueOne} to="/leagues/ligue-1">Ligue 1</Link>
                    <Link id="sa" onClick={clicked} className={serieA} to="/leagues/serie-a">Serie A</Link>
                    <Link id="ll" onClick={clicked} className={laliga} to="/leagues/laliga">LaLiga</Link>
                    <Link id="bu" onClick={clicked} className={bundesliga} to="/leagues/bundesliga">Bundesliga</Link>
                </div>

               
                    <Switch>
                        <Route path="/leagues" exact component={PremierLeague} />
                        <Route path="/leagues/ligue-1" component={Ligue1} />
                        <Route path="/leagues/serie-a" exact component={SerieA} />
                        <Route path="/leagues/laliga" exact component={Laliga} />
                        <Route path="/leagues/bundesliga" exact component={Bundesliga} />
                    </Switch>
                    

                
            </Router>

        </>
    )
}

export default LeagueLinks
