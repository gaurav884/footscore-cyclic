import React, { useEffect, useState } from 'react'
import TopScorers from './TopScorers'
import { RotateLoader } from "react-spinners"
import { useHistory } from "react-router-dom"

const StandingTable = (props) => {
    const history = useHistory();
    const [Standings, setStandings] = useState([])
    const [AllInfo, setAllInfo] = useState([])


    useEffect(() => {
        fetching();
        window.scrollTo(0, 0)

    }, [])

    async function fetching() {
        try {
            const response = await fetch("/standingTable/skjdfh384yt89hiroshfg0d8hg", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: `${props.LeagueID}`
                })
            });
            const data = await response.json();

            setAllInfo(JSON.parse(data))
            setStandings(JSON.parse(data).standings[0])


        }
        catch (err) {
            console.log(err);
            history.push("/ERROR505/doifgjdof34trgjdio234532fsdjgiodhgiodhgf")
        }

    }

    if (Standings.length === 0) {
        return <div className="loading-screen"><RotateLoader color="white" loading /></div>
    }


    return (
        <>

            <div className="league-info-container"  >
                <div className="league-container-1">
                    <div className="league-name">
                        <img className="league-logo" src={AllInfo.logo} alt={AllInfo.name} />
                        <h2 className="league-name-heading">{AllInfo.name} Standings</h2>
                    </div>



                    <div className="standings-container">
                        <table>
                            <tr className="standings-row">
                                <th className="standings-cell">Pos</th>
                                <th className="standings-cell">Club</th>
                                <th className="standings-cell">P</th>
                                <th className="standings-cell">W</th>
                                <th className="standings-cell">L</th>
                                <th className="standings-cell">D</th>
                                <th className="standings-cell">Pts</th>
                            </tr>
                            {Standings.map(each => {
                                return (
                                    < >
                                        <tr className="standings-row">
                                            <td className="standings-cell">{each.rank}</td>
                                            <td className="standings-club-cell">
                                                <img className="team-logo" src={each.team.logo} alt={each.team.name} />
                                                <p className="team-name">{each.team.name}</p>
                                            </td>
                                            <td className="standings-cell">{each.all.played}</td>
                                            <td className="standings-cell">{each.all.win}</td>
                                            <td className="standings-cell">{each.all.lose}</td>
                                            <td className="standings-cell">{each.all.draw}</td>
                                            <td className="standings-cell">{each.points}</td>
                                        </tr>

                                    </>)
                            })}


                        </table>
                    </div>
                </div>

                <div className="league-container-2">
                    <div className="league-name">
                        <img className="league-logo" src={AllInfo.logo} alt={AllInfo.name} />
                        <h2 className="league-name-heading">TopScorers</h2>


                    </div>
                    <TopScorers
                        leagueId={props.LeagueID}
                    />
                </div>
            </div>

        </>
    )
}

export default StandingTable
