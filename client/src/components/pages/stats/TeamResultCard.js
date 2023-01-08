import React from 'react'

const TeamResultCard = (prop) => {


    if (prop.result && Object.keys(prop.result).length === 0 && prop.result.constructor === Object) {
        return <></>;
    }
    return (
        <div className="result-container">

            <div className="result-header">
                <div className="result-header-image-container">
                    <img src={prop.result.team.logo} />
                </div>

                <div className="result-header-teaminfo-container">
                    <p>Name : {prop.result.team.name}</p>
                    <p>League : {prop.result.league.name}</p>
                    <p>Country : {prop.result.league.country}</p>
                </div>

            </div>

            <div className="result-body">
                <p className="result-body-heading">Season {prop.result.league.season}/{prop.result.league.season +1} Statistics </p>
                <p className="result-body-stats">Formation : {prop.result.lineups[0].formation}</p>
              
                
                <p className="result-body-stats">Last 5 Matches : {prop.result.form.slice(prop.result.form.length-5 , prop.result.form.length)}</p>
                <p className="result-body-stats">Goals Scored : {prop.result.goals.for.total.total}</p>
                
                <p className="result-body-stats">Total Games Played : {prop.result.fixtures.played.total}</p>
                <p className="result-body-stats">Total Wins : {prop.result.fixtures.wins.total}</p>
                <p className="result-body-stats">Total Losses : {prop.result.fixtures.loses.total}</p>
                <p className="result-body-stats">Total Draws : {prop.result.fixtures.draws.total}</p>



            </div>

        </div>
    )
}

export default TeamResultCard
