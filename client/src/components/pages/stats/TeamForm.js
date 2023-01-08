import React, { useEffect, useState ,useRef} from 'react'
import TeamResultCard from "./TeamResultCard"
import {useHistory } from "react-router-dom"
const TeamForm = () => {
    const history = useHistory();
    const [teams, setTeams] = useState([]);
    const [foundTeam , setFoundTeam] =useState({});
    const selectedTeam = useRef();
    const selectedleague = useRef();
    
    

    
    async function updateTeams(e) {
        try {
            const id = selectedleague.current.value;

        const data = await fetch("/teamsRoute/update-teams" ,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
              id:`${id}`
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

    async function findTeam() {
    
         try {
            const teamid = selectedTeam.current.value;
            const leagueid= selectedleague.current.value;
            
    
            const data = await fetch("/teamsRoute/find-team" ,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    teamid,
                    leagueid
    
                })
              })
           
            const response = await data.json();
            
           
             setFoundTeam(JSON.parse(response))
        }
        catch (err) {
            console.log(err);
            history.push("/ERROR505/doifgjdof34trgjdio234532fsdjgiodhgiodhgf")
        }
        

    }


    function search(e){
        e.preventDefault();
        findTeam();
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


                <button onClick={search}className="player-form-submit">Search</button>

            </form>
        </div>
        
        <TeamResultCard 
            result={foundTeam}
        />
        

        </>
    )
}


export default TeamForm
