import React from 'react';
import { FichaEquipo } from './FichaEquipo';

export const MiEquipo = (props) => {
    var equipo = props.props.team.map((x)=>{
        return <FichaEquipo data={x} team={props.props.team} setTeam={props.props.setTeam} />
    })
    return (
        <div className="MiEquipo">
        <h1>{equipo}</h1>
        </div>
    );
}