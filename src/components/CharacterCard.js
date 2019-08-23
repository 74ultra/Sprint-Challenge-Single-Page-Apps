import React from "react";

export default function CharacterCard(props) {
  

  
  return (
    
    

    <div>
      <img src={props.charImg} alt={props.name} />
      <p>Name: {props.name}</p>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
      <p>Location: {props.location}</p>
      <p>Origin: {props.origin}</p>
      

    </div>

    );
}


/*
<img src={props.charImg} alt={props.name}/>
      <p>Name: {props.name}</p>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
      <p>Location: {props.location}</p>


*/