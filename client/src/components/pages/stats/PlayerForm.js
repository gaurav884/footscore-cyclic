import React, { useState, useRef } from 'react'
import PlayerResultCard from './PlayerResultCard';
import { useHistory } from "react-router-dom"

const PlayerForm = () => {
    const history = useHistory();
    const [teams, setTeams] = useState([]);
    const [foundPlayer, setFoundPlayer] = useState({});

    const selectedTeam = useRef();
    const selectedleague = useRef();
    const playerName = useRef();

    async function updateTeams(e) {

        try {

            const id = selectedleague.current.value;

            const data = await fetch("/teamsRoute/update-teams", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: `${id}`
                })
            })

            const response = await data.json();

            setTeams(JSON.parse(response))

        }
        catch (err) {
            console.log(err);
            history.push("/ERROR505/doifgjdof34trgjdio234532fsdjgiodhgiodhgf")
        }



    }

    async function findPlayer() {
        try {
            const teamid = selectedTeam.current.value;
            const leagueid = selectedleague.current.value;
            const name = playerName.current.value;

            const data = await fetch("/teamsRoute/find-player", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    teamid,
                    leagueid,
                    name
                })
            })

            const response = await data.json();

            if (JSON.parse(response).error) {
                setFoundPlayer(undefined)

            }
            else {
                setFoundPlayer(JSON.parse(response))
            }
        }
        catch (err) {
            console.log(err);
            history.push("/ERROR505/doifgjdof34trgjdio234532fsdjgiodhgiodhgf")
        }



    }

    function search(e) {
        e.preventDefault();
        findPlayer();
    }
    return (
        <>
            <div className="form-container">
                <form className="player-form">


                    <div className="league-selector-div">
                        <span>Select the league : </span>
                        <select ref={selectedleague} onChange={updateTeams} name="league" className="drop-downs">
                            <option value="null">-----Select-----</option>
                            <option value="39">Premiere League</option>
                            <option value="61">Ligue 1</option>
                            <option value="78">Bundesliga</option>
                            <option value="140">Laliga</option>
                            <option value="135">Serie A</option>
                        </select>
                    </div>


                    <div className="team-selector-div">
                        <span>Select the Team : </span>
                        <select ref={selectedTeam} name="team" className="drop-downs">
                            {teams.map((each) => {
                                return (<option key={each.team.id} value={each.team.id} >{each.team.name}</option>)
                            })}
                        </select>
                    </div>

                    <div className="player-name-div">
                        <span>Enter the name of Player: </span>
                        <input ref={playerName} type="text" className="player-name-input" />
                    </div>

                    <button onClick={search} className="player-form-submit">Search</button>

                </form>
            </div>


            <PlayerResultCard
                result={foundPlayer}
            />
        </>
    )
}

export default PlayerForm
