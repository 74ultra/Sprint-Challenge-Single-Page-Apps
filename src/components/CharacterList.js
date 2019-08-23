import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard.js';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [charList, setCharList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        
        const charData = res.data.results;
        

        setCharList(charData);
      })

  }, []);

  return (
    <section className="character-list grid-view">
      <div>
        {Array.from(charList).map(char => {
          return <CharacterCard key={char.id}
                                charImg={char.image}
                                name={char.name}
                                species={char.species}
                                status={char.status}
                                location={char.location.name}
                                origin={char.origin.name}
                                
                />                      
        
        })}
      </div>
    </section>
  );
}


// https://rickandmortyapi.com/api/character/