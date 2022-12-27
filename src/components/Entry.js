// React component for a pokemon entry in the pokedex, including the name, image, and type

import React from 'react';
import './Entry.css';

function Entry(data) {
    return (
        <div className="entry">
        <div className="entry-body">
            <h5 className="entry-title">{data.name}</h5>
            <img src={data.image} alt={data.name} />
            <p className="entry-type">{data.type}</p>
        </div>
        </div>
    );
    }