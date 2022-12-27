import React from 'react';
import './Movements.css';

function Movements(data) {
    return (
        <div className="movements">
        <div className="movements-body">
            <h5 className="movements-title">{data.name}</h5>
            <p className="movements-type">{data.type}</p>
        </div>
        </div>
    );
}