import React from 'react'
// import { createContext } from 'react';
import './TeamScore.css'
import {Link} from 'react-router-dom'


const TeamScore = ({pgameEvent}) => {
  
  // const teamClickHandler=async(id)=>{
    
  //   Idsent = await id
  //   console.log("gete" + Idsent);
  //   return(
  //     window.location='/DetailHome'
  //     )
    
  // }
  
  return (
    <div className="TeamScore__Container">
      <h5 className="time">
        {pgameEvent.Eps === "NS" ? "Not Started" : pgameEvent.Eps}
      </h5>

     
      <Link
        to="/DetailHome"
        state={{
          id: pgameEvent.Eid,
          Eps: pgameEvent.Eps,
          Tr1: pgameEvent.Tr1,
          Tr2: pgameEvent.Tr2,
          T1: pgameEvent.T1,
          T2: pgameEvent.T2,
         
        }}
        className="team__container"
      >
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
      </Link>

      <p>Star</p>
    </div>
  );
}

export default TeamScore