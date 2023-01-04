import React , { useEffect, useState } from "react";
import styled from "styled-components";

import { Toast } from "react-bootstrap";

export const FichaEquipo = (props) => {
    const [show, setShow] = useState(false);
    
    const eliminarPokemon = (id) => {
        props.setTeam(props.team.filter((x)=>x[0]!==id));
        setShow(true);
    }

    var types = props.data.types.map((type) => {
        return <div className="pill" style={{backgroundColor:`var(--${type.type.name})`}}>{type.type.name}</div>
    });
    var stats = props.data.stats.map((stat) => {
        return <li>{stat.stat.name}: {stat.base_stat}</li>
    });


    return (
        <>
            <ContenedorFichaEquipo className="fichaEquipo">
                <div className="fichaEquipoName">
                    {props.data.name}
                </div>
                <div className="fichaEquipoSprite">
                    <img src={props.data.sprites.front_default} alt="sprite"/>
                </div>
                <div className="fichaEquipoProperties">
                    <div className="fichaEquipoTypes">
                        Tipos:
                        <TiposDiv>{types}</TiposDiv>
                    </div>
                    <div className="fichaEquipoAltura">
                        Altura: {props.data.height /10} m
                    </div>
                    <div className="fichaEquipoPeso">
                        Peso: {props.data.weight /10} kg
                    </div>
                    <div className="fichaEquipoStats">
                        Stats:
                        <ul>{stats}</ul>
                    </div>
                </div>
                <button className="fichaEquipoButton" onClick={() => eliminarPokemon(props.id)}>Eliminar del equipo
                </button>
                
            </ContenedorFichaEquipo>
            <SToast className="bg-light" onClose={() => setShow(false)} show={show} delay={3000} autohide >
                <Toast.Body>
                Se ha eliminado el pokemon del equipo
                </Toast.Body>
            </SToast>
        </>
    );
}

const ContenedorFichaEquipo = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    width: 25%;
    padding: 2rem;

    .fichaEquipoName {
        text-transform: capitalize;
    }

    li {
        text-transform: capitalize;
    }
`;

const SToast = styled(Toast)`
    margin: 0 auto;
`;

const TiposDiv = styled.div`
    display:flex;
`;