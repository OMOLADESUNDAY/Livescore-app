import React from 'react'
import { useLocation } from 'react-router-dom';
import { BsFillStarFill } from "react-icons/bs";
import { useState } from 'react';
import './detailHome.css'
const DetailHome = () => {

  
 
  const location=useLocation()
  const data = location.state
  console.log(data)
    const [starclick, setStarClick] = useState(true);
    const starClickHandler = () => {
      setStarClick(!starclick);
    };  
  
      if (data ) {
        return (
          <div className="container ">
            <div>
              {data.stg.Ccdiso}
              <br />
              {data.stg.Scd}
            </div>
            <div className="detail__home__container">
              <h1>{data.Eps}</h1>

              <div className="middle__elements">
                <div className='team1'>
                  {data.T1.map((team) => {
                    return (
                      <div key={team.ID} className="teams">
                        {team.Nm}
                        {console.log(team.Img)}
                        <img
                          src={
                            " https://lsm-static-prod.livescore.com/medium/" +
                            team.Img
                          }
                          alt="team_image"
                          style={{ width: "50px", height: "50px" }}
                        />
                      </div>
                    );
                  })}
                  <h1>{data.Tr1}</h1>
                </div>
                <div className='team2'>
                  <h1>{data.Tr2}</h1>
                  {data.T2.map((team2) => {
                    return (
                      <div key={team2.ID} className="teams">
                        {" "}
                        {team2.Nm}
                        <img
                          src={
                            " https://lsm-static-prod.livescore.com/medium/" +
                            team2.Img
                          }
                          alt="team_image"
                          style={{ width: "50px", height: "50px" }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="star__container">
                <BsFillStarFill
                  onClick={starClickHandler}
                  className={
                    starclick === true ? "star" : "star__color__remove"
                  }
                />
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <h1>teamId</h1>
            <h1>hello</h1>
          </div>
        );
      }
  

  
  
}

export default DetailHome
