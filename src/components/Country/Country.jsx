import React from "react";
import "./Country.css";

const Country = ({ country }) => {
const handleClick = () =>{
  console.log("button clicked")
}
  return (
    <div className="country">
      <figure>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      </figure>
      <h2>Name: {country.name.common}</h2>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "[Big Country]" : "[Small Country]"}
      </p>
      <button className="btn btn-primary" onClick={handleClick}>Not Visited</button>
    </div>
  );
};

export default Country;
