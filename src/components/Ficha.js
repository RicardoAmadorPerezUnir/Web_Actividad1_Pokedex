import React , { useState } from "react";
import { useContador } from "../hooks/useContador";
import styled from "styled-components";

import { Toast } from "react-bootstrap";

export const Ficha = (props) => {
    const [show, setShow] = useState(false);
    const [teamText, setTeamText] = useState("");
    const {contador, incrementar} = useContador(props.team.length + 1);
    
    const guardarPokemon = (pokemon_json) => {
        if (props.team.length < 6) {
            props.setTeam([...props.team, [contador, pokemon_json]]);
            setTeamText(`Pokemon agregado al equipo. Pokemon en el equipo: ${contador}`);
            setShow(true);
        }
        else {
          setTeamText("El equipo está lleno");
          setShow(true);
        }
      }

    var types = props.data.types.map((type) => {
        return <div className="pill" style={{backgroundColor:`var(--${type.type.name})`}}>{type.type.name}</div>
    });
    var stats = props.data.stats.map((stat) => {
        return <li>{stat.stat.name}: {stat.base_stat}</li>
    });


    return (
        <ContenedorFicha className="ficha">
            <div className="fichaName">
                {props.data.name}
            </div>
            <div className="fichaSprite">
                <img src={props.data.sprites.front_default} alt="sprite"/>
            </div>
            <FichaProperties>
                <div className="fLabelTypes">
                    Tipos:
                </div>
                <div className="fichaTypes">
                    <TiposDiv>{types}</TiposDiv>
                </div>
                <div className="pokeData">
                    <div className="dataLabel">
                        Altura:
                    </div>
                    {props.data.height /10} m
                </div>
                <div className="pokeData">
                    <div className="dataLabel">
                        Peso:
                    </div>
                    {props.data.weight /10} kg
                </div>
                <div className="pokeDataStats">
                    <div className="dataLabel">
                        Estadísticas:
                    </div>
                    <ul>{stats}</ul>
                </div>
            </FichaProperties>
            <button className="fichaButton" onClick={() => {guardarPokemon(props.data);incrementar()}}>Añadir a mi equipo
            </button>
            <Toast className="d-inline-block bg-light" onClose={() => setShow(false)} show={show} delay={3000} autohide >
                <Toast.Body>
                {teamText}
                </Toast.Body>
            </Toast>
        </ContenedorFicha>
    );
}

const ContenedorFicha = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    width: 25%;
    padding: 2rem;

    .fichaName {
        text-transform: capitalize;
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    li {
        text-transform: capitalize;
    }
`;

const FichaProperties = styled.div`

    .fLabelTypes {
        font-weight: bold;
        margin-bottom: .5rem;
    }
    .fichaTypes {
        margin-bottom: .5rem;
    }
    .pokeData {
        display: flex;
        flex-direction: row;
        margin-bottom: .5rem;
    }
    .dataLabel {
        font-weight: bold;
        margin-right: .5rem;
    }
    .pokeDataStats {
        display: flex;
        flex-direction: column;
        margin-bottom: .5rem;
    }
`;

const TiposDiv = styled.div`
    display:flex;
`;