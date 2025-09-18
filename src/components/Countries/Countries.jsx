import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <p>Total Countries:{countries.length}</p>
      <div  className="countries">
        {countries.map((country) => (
          <Country country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
