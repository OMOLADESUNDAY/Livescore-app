import React from 'react'
// import { createContext } from 'react';
import './TeamScore.css'

const TeamScore = ({pgameEvent}) => {

  const teamClickHandler=(id)=>{
    console.log(id)
    window.location='/DetailHome'
  }
  
  return (
    <div className="TeamScore__Container">
      <h5 className="time">
        {pgameEvent.Eps === "NS" ? "Not Started" : pgameEvent.Eps}
      </h5>
        <div
          className="team__container" onClick={()=>teamClickHandler(pgameEvent.Eid)}>
          <div className="team1">
            {pgameEvent.T1.map((team) => {
              return (
                <div key={team.ID}>
                  <p>{team.Nm}</p>
                </div>
              );
            })}
            <h1>{pgameEvent.Tr1 === false ? " ? " : pgameEvent.Tr1}</h1>
          </div>
          <div className="team2">
            <h1>{pgameEvent.Tr2}</h1>
            {pgameEvent.T2.map((team2) => {
              return (
                <div key={team2.ID}>
                  <p>{team2.Nm}</p>
                </div>
              );
            })}
          </div>
        </div>
      

      <p>Star</p>
    </div>
  );
}

export default TeamScore