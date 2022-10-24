import React from 'react'
// import { createContext } from 'react';
import './TeamScore.css'
import { BsFillStarFill } from "react-icons/bs";
import {Link} from 'react-router-dom'
import { useState } from 'react';


const TeamScore = ({pgameEvent}) => {
  const [starclick, setStarClick] =useState(true) 
  const starClickHandler=()=>{
    setStarClick(!starclick)
  }  
  return (
    <div>
      <div className="TeamScore__Container">
        <h5 className="time">
          {pgameEvent.Eps === "NS" ? "Not Started" : pgameEvent.Eps}
        </h5>

        <Link
          to="/DetailHome"
          state={{
            id: pgameEvent.Eid,
            stg:pgameEvent.Stg,
            Eps: pgameEvent.Eps,
            Tr1: pgameEvent.Tr1,
            Tr2: pgameEvent.Tr2,
            T1: pgameEvent.T1,
            T2: pgameEvent.T2,
          }}
          className="team__container link__container"
        >
          <div className="team1">
            {pgameEvent.T1.map((team) => {
              return (
                <div key={team.ID}>
                  <p>{team.Nm}</p>
                </div>
              );
            })}
            <h3>{pgameEvent.Tr1 === null ? " ? " : pgameEvent.Tr1}</h3>
          </div>
          <div className="team2">
            <h3>{pgameEvent.Tr2 === null ? " ? " : pgameEvent.Tr2}</h3>
            {pgameEvent.T2.map((team2) => {
              return (
                <div key={team2.ID}>
                  <p>{team2.Nm}</p>
                </div>
              );
            })}
          </div>
        </Link>
        <div className='star__container'>
          <BsFillStarFill
            onClick={starClickHandler}
            className={starclick === true ? "star" : "star__color__remove"}
          />
        </div>
      </div>
      <hr className='horizontal__line'/>
    </div>
  );
}

export default TeamScore