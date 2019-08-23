import React from 'react';

export default function EpisodeCard(props) {

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Air Date: {props.airDate}</p>
            <p>Episode: {props.episode}</p>
        </div>
    );
}