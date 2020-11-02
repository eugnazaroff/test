import React from 'react';
import './card.css'

export const Card = ({monster}) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt=""/>
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    );
};
