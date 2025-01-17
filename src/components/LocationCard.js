import React from "react";
import { Card, Image } from 'semantic-ui-react';

export default function LocationCard({ name, type, dimension, residents }) {
  return (

    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>Type: {type}</Card.Description>
        <Card.Description>Dimension: {dimension}</Card.Description>
      </Card.Content>
      <Card.Content extra>Residents: {residents}</Card.Content>
    </Card>
    
  );
}
