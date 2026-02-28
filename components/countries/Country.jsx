import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedflags }) => {
  //   console.log(country);
  console.log(handleVisitedCountries);
  const [visited, setVisited] = useState(false);
  //   const handleVisited = () => {
  //     // console.log("button clicked");
  //     setVisited(true)
  //   };
  const handleVisited = () => {
    // if(visited){
    //     setVisited(false)
    // }
    // else{
    //     setVisited(true)
    // }
    // setVisited(visited?false :true)
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div
      className={`country border-lg text-center ${visited && "country-visited"}`}
    >
      <img src={country.flags.flags.png} />
      <h3>{country.name.common}</h3>
      <p>
        {country.area.area}
        {country.area.area > 30000 ? "Big Country" : "SmALL Country"}
      </p>
      <div className="button">
        <button onClick={handleVisited}>
          {visited ? "visited" : "Not visited"}
        </button>
        <button
          onClick={() => {
            handleVisitedflags(country.flags.flags.png);
          }}
        >
          Add Visted flags
        </button>
      </div>
    </div>
  );
};

export default Country;
// inline css
//2
