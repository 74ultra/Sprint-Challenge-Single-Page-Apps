import React, { useEffect, useState } from "react";
import axios from 'axios';

import EpisodeCard from './EpisodeCard.js';

export default function EpisodesList() {
    
    const [epiList, setEpiList] = useState([])

    useEffect(() => {
        

        axios.get('https://rickandmortyapi.com/api/episode/')
            .then(res => {

                const epiData = res.data.results;
                console.log(epiData)
                setEpiList(epiData);
            })
    }, []);

    return (
        <div>
            {Array.from(epiList).map(epi => {
                return <EpisodeCard key={epi.id}
                                    name={epi.name}
                                    airDate={epi.air_date}
                                    episode={epi.episode}
                                

                />
            })}
        </div>
    );
}


// https://rickandmortyapi.com/api/episode/