import React from "react";

const Country = ({ country }) => {
  console.log(country);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{country.name.common}</h2>
          <p>{country.flags.flags.alt}</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
