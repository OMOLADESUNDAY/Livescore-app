import React from 'react'
import { useLocation } from 'react-router-dom';
const DetailHome = () => {

  
 
  const location=useLocation()
  const data = location.state
  console.log(data)
  
  
      if (data ) {
        return (
          <div>
            <h1>{data.Eps}</h1>
            {data.T1.map((team) => {
              return (
                <div key={team.ID}>
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

            <h1>{data.Tr2}</h1>
            {data.T2.map((team2) => {
              return (
                <div key={team2.ID}>
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
