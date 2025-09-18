import React from 'react';

const Country = ({countries}) => {
    console.log(countries)
    return (
        <div>
            {
                countries.map((country=>
                    <h3>Name:{country.name.common}</h3>
                ))
            }
        </div>
    );
};

export default Country;