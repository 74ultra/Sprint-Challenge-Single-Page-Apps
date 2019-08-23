import React from "react";
import { Card, Image } from 'semantic-ui-react';

export default function CharacterCard(props) {
  

  
  return (
   
    <section className="character-list grid-view">
      <Card>
        <Image src={props.charImg} alt={props.name} />
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>
            <span>Species: {props.species}</span>
            <span>({props.status})</span>
          </Card.Meta>
          <Card.Description>Location: {props.location}</Card.Description>
          <Card.Description>
            <p>Origin: {props.origin}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    </section>
  );
}


/*
<img src={props.charImg} alt={props.name}/>
      <p>Name: {props.name}</p>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
      <p>Location: {props.location}</p>


*/