import React from 'react'
import { useContext } from 'react';
import { AppContext } from './context';

const DetailHome = ({teamId}) => {
  let gamesaarry=[]
  let teamdata=[]
  const data=useContext(AppContext)
  console.log(data)
  data.map((ggg)=>{
    ggg.T1.map((team)=>{
      teamdata=[team.Img]
      return(
        teamdata
      )
    })
    gamesaarry = [ggg.Eid, ggg.Tr1, ggg.Tr2];
    return(
        gamesaarry
    )
  })
  
  return (
    <div>
      <h1>{teamId}</h1>
      <h1>hello</h1>
    </div>
  );
}

export default DetailHome
