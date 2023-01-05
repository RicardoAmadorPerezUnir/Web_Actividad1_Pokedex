import React from "react";
import { FichaEquipo } from "./FichaEquipo";
import styled from "styled-components";

export const MiEquipo = (props) => {
    var equipo = props.props.team.length>0 ? props.props.team.map((x)=>{
        return <FichaEquipo data={x[1]} id={x[0]} team={props.props.team} setTeam={props.props.setTeam} />
    }): <NoInfo>No ha agregado ningún pokemon a su equipo</NoInfo>
    return (
        <EquipoContenedor>
            {equipo}
        </EquipoContenedor>
    );
}

const NoInfo = styled.div`
    margin: 10% auto;
    width: 50%;
    font-size: 2rem;
    color: #EA6548;
    text-align: center;
`;

const EquipoContenedor = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: #fff;
`;