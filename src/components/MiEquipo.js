import React from "react";
import { useState } from "react";
import { FichaEquipo } from "./FichaEquipo";
import { Toast } from "react-bootstrap";
import styled from "styled-components";

export const MiEquipo = ({miEquipo}) => {
    const [show, setShow] = useState(false);
    var equipo = miEquipo.team.length>0 ?miEquipo.team.map((x)=>{
        return <FichaEquipo data={x[1]} id={x[0]} team={miEquipo.team} setTeam={miEquipo.setTeam} setShow={setShow}/>
    }): <NoInfo>No ha agregado ningún pokemon a su equipo</NoInfo>
    
    return (
        <EquipoContenedor className="fondo">
            {equipo}
        <Toast className="bg-light toast border-danger" onClose={() => setShow(false)} show={show} delay={3000} autohide >
            <Toast.Body>
            Se ha eliminado del equipo
            </Toast.Body>
        </Toast>
        </EquipoContenedor>
    );
}

const NoInfo = styled.div`
    margin: 10% auto;
    width: 50%;
    font-size: 2rem;
    color: #EA6548;
    text-align: center;
    color: #fff;
    height: 100%;
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