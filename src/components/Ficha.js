import React , { useState } from "react";
import { useContador } from "../hooks/useContador";
import { FichaProperties } from "./FichaProperties";
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
        <LinearGradient className="linearGradient" style={{background: `${props.data.types.length>1?`linear-gradient(var(--${props.data.types[0].type.name}), var(--${props.data.types[1].type.name}))`:`linear-gradient(var(--${props.data.types[0].type.name}),var(--${props.data.types[0].type.name}))`}`}}>
            <ContenedorFicha className="ficha">
                <div className="fichaName">
                    {props.data.name}
                </div>
                <div className="fichaSprite">
                    <img src={props.data.sprites.front_default} alt="sprite"/>
                </div>
                <FichaProperties props={props} />
                <button className="fichaButton" onClick={() => {guardarPokemon(props.data);incrementar()}}>Añadir a mi equipo
                </button>
                <Toast className="bg-light" onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Body>
                    {teamText}
                    </Toast.Body>
                </Toast>
            </ContenedorFicha>
        </LinearGradient>
    );
}

const ContenedorFicha = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: #fff;
    width: 90%;
    margin: 5%;

    .fichaName {
        text-transform: capitalize;
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    li {
        text-transform: capitalize;
    }

    .fichaButton{
        margin-bottom: 1rem;
    }
`;

const LinearGradient = styled.div`
    margin: 0 auto;
    display: flex;
    border-radius: 1rem;
`;