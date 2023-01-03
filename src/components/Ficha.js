import React , { useEffect, useState } from 'react';
import { useContador } from '../hooks/useContador';
import styled from 'styled-components';

import { Toast } from 'react-bootstrap';

export const Ficha = (props) => {
    const [show, setShow] = useState(false);
    const [teamText, setTeamText] = useState('');
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
            <div className="fichaProperties">
                <div className="fichaTypes">
                    Tipos:
                    <TiposDiv>{types}</TiposDiv>
                </div>
                <div className="fichaAltura">
                    Altura: {props.data.height /10} m
                </div>
                <div className="fichaPeso">
                    Peso: {props.data.weight /10} kg
                </div>
                <div className="fichaStats">
                    Stats:
                    <ul>{stats}</ul>
                </div>
            </div>
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
    }

    li {
        text-transform: capitalize;
    }
`;

const TiposDiv = styled.div`
    display:flex;
`;