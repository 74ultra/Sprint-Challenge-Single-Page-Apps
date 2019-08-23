import React from 'react';
import { Card } from 'semantic-ui-react';

export default function EpisodeCard(props) {

    return (
        <Card>
           <Card.Content extra>Episode: {props.episode}</Card.Content>
           <Card.Content>
               <Card.Header>{props.name}</Card.Header>
           </Card.Content>
           <Card.Content extra>Air Date: {props.airDate}</Card.Content>
            
        </Card>
    );
}


/*
<p>Name: {props.name}</p>
            <p>Air Date: {props.airDate}</p>
            <p>Episode: {props.episode}</p>

*/