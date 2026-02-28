import React, { use, useState } from "react";
import Country from "./Country";
import "./countries.css";

const Countries = ({ countryPromise }) => {
  const [visiteCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  const handleVisitedCountries = (Country) => {
    console.log("clicked", Country);
    const newVisitedCountries = [...visiteCountries, Country];
    setVisitedCountries(newVisitedCountries);
  };
  const handleVisitedflags = (flag) => {
    console.log("clicked Flags");
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };
  const countriesData = use(countryPromise);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div>
      <h1>Country{countries.length}</h1>
      <h4>Total Country visited:{visiteCountries.length}</h4>
      <h4>Total Flags Visited:{visitedFlags.length}</h4>
      <ol>
        {visiteCountries.map((Country) => (
          <li>{Country.name.common}</li>
        ))}
      </ol>
      <div className="flags">
        {visitedFlags.map((flag) => (
          <img src={flag} width={50} height={40} />
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedflags={handleVisitedflags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
