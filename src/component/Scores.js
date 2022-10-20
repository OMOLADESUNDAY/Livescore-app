// import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import { AppContext } from "./context";

import Score from './TeamScore';
import './Scores.css'


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'fa0e811111msh01e55b0923ed77bp167981jsn24b72d957ee9',
// 		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
// 	}
// };

// fetch('https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=-7', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// livescoreapikey : 47ebd85ab310e584a034268128bd60da1f8a18362f61cc6c56903e7b2dc3bef9



const Scores = () => {

//     const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '7a1576e1d2mshff79dcb3cbb9727p1db395jsnda614f582d9b',
// 		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
// 	}
// };

  const data5 = useContext(AppContext);
  console.log(data5)
  return (
    <section className="container">
        {data5.map((games)=>{
          return(
            <div key={games.Sid}>
              <h2>{games.Ccd}</h2>
              <h2>{games.Scd}</h2>
              {games.Events.map((gameEvent)=>{
                return(
                  <div key={gameEvent.Eid}>
                    <Score pgameEvent={gameEvent} />
                  </div>        
                )
              })}
            </div>
          )
        })}
    </section>
  )
}

export default Scores