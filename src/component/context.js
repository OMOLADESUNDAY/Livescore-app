import React from "react";
import { createContext } from "react";
import { useState,useEffect } from "react";

const AppContext=createContext()
const TourUrl ="https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=-7";

    

const AppProvider=({children})=>{

    const options = {
      method: "GET",
      headers: {
		'X-RapidAPI-Key': '6baac5ca8emsh269cbae7243564cp19f6a4jsn5937198bb705', //isabellaalisha
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
      // headers: {
      //   "X-RapidAPI-Key": "fa0e811111msh01e55b0923ed77bp167981jsn24b72d957ee9", omoladesunday
      //   "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      // },
    };

    const [tour, setTour] = useState([]);
    const getTour = async () => {
      const response = await fetch(TourUrl, options);
      const tour = await response.json();
      setTour(tour.Stages);
      // console.log(tour.Stages);
    };
    useEffect(() => {
      getTour();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
        return (
          <AppContext.Provider value={tour}>
            {children}
          </AppContext.Provider>
        );
}
export {AppContext, AppProvider}
