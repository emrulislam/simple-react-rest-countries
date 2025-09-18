import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const countriesData= use(countriesPromise)
    const countries=countriesData.countries
    console.log(countries);
    return (
        <div>
            <p>Total Countries:{countries.length}</p>
            <Country countries={countries}></Country>
        </div>
    );
};

export default Countries;