import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = ({ countriesPromise }) => {
  const[visitedCountries,setVisitedCountries]=useState([])
  const[visitedFlags,setVisitedFlags]=useState([])
  const handleVisitedCountries = (country) =>{
    const newVisitedCountries = [...visitedCountries,country]
    setVisitedCountries(newVisitedCountries)
  }
  const handleVisitedFlags=(flag)=>{
    const newVisitedFlags=[...visitedFlags,flag]
    setVisitedFlags(newVisitedFlags)
  }
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <p>Total Countries:{countries.length}</p>
      <h3>Country Visited:{visitedCountries.length}</h3>
      <ol className="grid grid-cols-12 border-2 border-amber-400 p-4 my-4">
        {
        visitedCountries.map(country=><li>{country.name.common}</li>)
        }
      </ol>
      <h3>Flags Visited:{visitedFlags.length}</h3>
      <div className="grid grid-cols-12 border-2  border-amber-400 p-4 my-4">
        {
          visitedFlags.map(flag=><img src={flag} className="w-16 h-12 p-2"></img>)
        }
      </div>
      <div  className="countries">
        {countries.map((country) => (
          <Country country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
