import React from "react";
import styled from "styled-components";
import { FichaProperties } from "./FichaProperties";

export const FichaEquipo = ({data, id, team, setTeam, setShow}) => {

    const eliminarPokemon = (id) => {
        localStorage.setItem('team', JSON.stringify(team.filter((x)=>x[0]!==id)))
        setTeam(JSON.parse(localStorage.getItem('team')));
        setShow(true);
    }

    return (
        <LinearGradient className="linearGradient" style={{background: `${data.types.length>1?`linear-gradient(var(--${data.types[0].type.name}), var(--${data.types[1].type.name}))`:`linear-gradient(var(--${data.types[0].type.name}),var(--${data.types[0].type.name}))`}`}}>
            <ContenedorFichaEquipo>
                <div className="fichaEquipoName">
                    {data.name}
                </div>
                <div className="fichaSprite">
                    <img src={data.sprites.front_default} alt="sprite"/>
                </div>
                <FichaProperties data={data} />
                <button className="fichaButton" onClick={() => eliminarPokemon(id)}>Eliminar del equipo
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
`;
