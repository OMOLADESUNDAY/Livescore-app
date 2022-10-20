import React from 'react'
import { useContext } from 'react';
import { AppContext } from './context';

const DetailHome = ({teamId}) => {
  const data=useContext(AppContext)
  console.log(data)

  let teamObjectdata={}
  data.map((hhh)=>{
    const country=hhh.Sid
    const statee = hhh.Ccd
    const league = hhh.Scd
    teamObjectdata={country,statee,league}
    return(
      teamObjectdata
    )
  })
  console.log(teamObjectdata)
  return (
    <div>
      <h1>{teamId}</h1>
      <h1>hello</h1>
    </div>
  );
}

export default DetailHome
