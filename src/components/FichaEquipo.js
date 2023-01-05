import React from "react";
import styled from "styled-components";
import { FichaProperties } from "./FichaProperties";

export const FichaEquipo = (props) => {

    const eliminarPokemon = (id) => {
        props.setTeam(props.team.filter((x)=>x[0]!==id));
        props.setShow(true);
    }

    return (
        <LinearGradient className="linearGradient" style={{background: `${props.data.types.length>1?`linear-gradient(var(--${props.data.types[0].type.name}), var(--${props.data.types[1].type.name}))`:`linear-gradient(var(--${props.data.types[0].type.name}),var(--${props.data.types[0].type.name}))`}`}}>
            <ContenedorFichaEquipo>
                <div className="fichaEquipoName">
                    {props.data.name}
                </div>
                <div className="fichaSprite">
                    <img src={props.data.sprites.front_default} alt="sprite"/>
                </div>
                <FichaProperties props={props} />
                <button className="fichaEquipoButton" onClick={() => eliminarPokemon(props.id)}>Eliminar del equipo
                </button>
            </ContenedorFichaEquipo>
        </LinearGradient>
    );
}


const LinearGradient = styled.div`
    margin: 1rem auto;
    display: flex;
    border-radius: 15px;
    width: 30%;
`;

const ContenedorFichaEquipo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: #fff;
    width: 90%;
    margin: 5%;

    .fichaEquipoName {
        text-transform: capitalize;
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    li {
        text-transform: capitalize;
    }

    button{
        width: 10rem;
        height: 2.5rem;
        margin: .5rem auto;
        border-radius: 16px;
        background-color: #ededed
    }
`;
