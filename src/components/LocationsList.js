import React, { useEffect, useState } from "react";
import axios from 'axios';

import LocationCard from './LocationCard.js';

export default function LocationsList() {

    const [locList, setLocList] = useState([]);


    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location/")
        .then(res => {

            const locData = res.data.results;

            setLocList(locData);

        });
    }, []);

    return (
        <div>
            {Array.from(locList).map(loc => {
                return <LocationCard key={loc.id}
                                     name={loc.name}
                                     type={loc.type}
                                     dimension={loc.dimension}
                                     residents={loc.residents.length}

                        />
            })}
        </div>
    )

}






// https://rickandmortyapi.com/api/location/