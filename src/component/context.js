import React from "react";
import { createContext } from "react";
import { useState,useEffect } from "react";

const AppContext=createContext()
const TourUrl ="https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=-7";

    

const AppProvider=({children})=>{

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fa0e811111msh01e55b0923ed77bp167981jsn24b72d957ee9",
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    const [tour, setTour] = useState([]);
    const getTour = async () => {
      const response = await fetch(TourUrl, options);
      const tour = await response.json();
      setTour(tour.Stages);
      console.log(tour.Stages);
    };
    useEffect(() => {
      getTour();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let theoutervalue=[]
        tour.map((games)=>{
            theoutervalue = games.Events;
            return(
                games.Events
            )
        })

        return (
          <AppContext.Provider value={theoutervalue}>
            {children}
          </AppContext.Provider>
        );
}
export {AppContext, AppProvider}
