import React from 'react'

const PlayerResultCard = (prop) => {
  
    
    if (prop.result && Object.keys(prop.result).length === 0 && prop.result.constructor === Object) {
        return <></>;
    }
    if(prop.result === undefined){
        return <div className="result-container"><p className="not-found-error">No results were returned. Please refine your search.</p></div>;
    }
    return (
        <div className="result-container">

            <div className="result-header">
                <div className="result-header-image-container playerPhoto">
                    <img className="playerPhoto" src={prop.result.player.photo} />
                </div>
    
                    <div className="result-header-teaminfo-container">
                        <p>Name : {prop.result.player.name}</p>
                        <p>Nationality : {prop.result.player.nationality}</p>
                        <p>Club : {prop.result.statistics[0].team.name}</p>
                        <p>Age : {prop.result.player.age}</p>
                        <p>Height : {prop.result.player.height}</p>
                        <p>Position : {prop.result.statistics[0].games.position}</p>
                    </div>

            </div>

            <div className="result-body">
                
                <p className="result-body-heading">Season {prop.result.statistics[0].league.season}/{prop.result.statistics[0].league.season +1} Statistics </p>
                <p className="result-body-stats">Rating : {(prop.result.statistics[0].games.rating).substring(0,3)}</p>
                <p className="result-body-stats">Games Played : {prop.result.statistics[0].games.appearences}</p>
                <p className="result-body-stats">Goals Scored : {prop.result.statistics[0].goals.total}</p>
                <p className="result-body-stats">Pass Accuracy : {prop.result.statistics[0].passes.accuracy}</p>

                
                
                



            </div>

        </div>
    )
}

export default PlayerResultCard
