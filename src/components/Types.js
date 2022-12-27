// React component for showing all the types of pokemon

import React from 'react';
import './Types.css';

function Types(data) {
    return (
        <div className="types">
        <div className="types-body">
            <h5 className="types-title">{data.name}</h5>
            <p className="types-type">{data.type}</p>
        </div>
        </div>
    );
}
