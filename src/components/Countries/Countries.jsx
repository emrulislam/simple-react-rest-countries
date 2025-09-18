import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = ({ countriesPromise }) => {
  const[visitedCountries,setVisitedCountries]=useState([])
  const handleVisitedCountries = (country) =>{
    console.log("handle visited country clicked",country)
  }
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <p>Total Countries:{countries.length}</p>
      <h3>Country Visited:</h3>
      <div  className="countries">
        {countries.map((country) => (
          <Country country={country} handleVisitedCountries={handleVisitedCountries}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
