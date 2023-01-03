import React from 'react';
import { FichaEquipo } from './FichaEquipo';
import styled from 'styled-components';

export const MiEquipo = (props) => {
    var equipo = props.props.team.length>0 ? props.props.team.map((x)=>{
        return <FichaEquipo data={x[1]} id={x[0]} team={props.props.team} setTeam={props.props.setTeam} />
    }): <NoInfo>No ha agregado ningún pokemon a su equipo</NoInfo>
    return (
        <div className="MiEquipo">
            <div>{equipo}</div>
        </div>
    );
}

const NoInfo = styled.div`
    margin: 10% auto;
    width: 50%;
    font-size: 2rem;
    color: #EA6548;
`;