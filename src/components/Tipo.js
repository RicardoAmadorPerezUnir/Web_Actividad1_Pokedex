import React , { useEffect, useState } from 'react';

export const Tipo = ({detalles}) => {

    var types = (detalles[1].damage_relations.double_damage_from).map((x) => {
        return <div>{x.name}</div>
    });
    return (
        <div className="ficha">
            <div className="fichaName">
                {detalles[0]}
            </div>
            <div className="fichaProperties">
                <div className="fichaTypes">
                    Recibe el doble de daño de:
                    {types}
                </div>
                {/* <div className="fichaStats">
                    Stats:
                    <ul>{stats}</ul>
                </div> */}
            </div>
        </div>
    );
}