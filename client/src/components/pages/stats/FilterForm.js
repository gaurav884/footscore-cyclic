import React, { useEffect, useState } from 'react'
import PlayerForm from "./PlayerForm"
import TeamForm from "./TeamForm"

const FilterForm = () => {

    const [team , setTeam] = useState(false);
    const [player, setPlayer] = useState(false);
    const [teamButtonClass ,SetteamButtonClass] = useState("");
    const [PlayerButtonClass ,setPlayerButtonClass] = useState("");
    

    
    

    return (
        <div className="filter-container">
           
                <div className="player-team-radio filter-container-elements ">

                    <button onClick={ ()=>{
                       setTeam(true);
                       setPlayer(false);
                       SetteamButtonClass("selected");
                       setPlayerButtonClass("")
                    }}
                    className={teamButtonClass}>Team</button>
                    
                    
                    <button onClick={ ()=>{
                       setTeam(false);
                       setPlayer(true);
                       SetteamButtonClass("");
                       setPlayerButtonClass("selected")
                    }} className={PlayerButtonClass}>Player</button>

               
            </div>
            
            
            {(team) ? <TeamForm />:null}
            {(player) ? <PlayerForm />:null}
           
        </div>
    )
}

export default FilterForm
