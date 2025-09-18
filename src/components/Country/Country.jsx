import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);
  const handleVisit = () => {
    //  First System
    // if(visited){
    //   setVisited(false)
    // }
    // else{
    //   setVisited(true)
    // }
    // Second System
    // setVisited(visited ? false : true)
    // Third System
    setVisited(!visited)
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <figure>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      </figure>
      <h2>Name: {country.name.common}</h2>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "[Big Country]" : "[Small Country]"}
      </p>
      <button className="btn btn-primary" onClick={handleVisit}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
