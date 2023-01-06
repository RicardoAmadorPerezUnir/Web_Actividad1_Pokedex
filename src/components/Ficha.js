import React , { useState } from "react";
import { useContador } from "../hooks/useContador";
import { FichaProperties } from "./FichaProperties";
import styled from "styled-components";
import { Toast } from "react-bootstrap";

export const Ficha = ({data, team, setTeam}) => {
    const [show, setShow] = useState(false);
    const [teamText, setTeamText] = useState("");
    const {contador, incrementar} = useContador(Math.random());
    
    const guardarPokemon = (pokemon_json) => {
        debugger;
        if (team.length < 6) {
            localStorage.setItem('team', JSON.stringify([...team, [contador, pokemon_json]]));
            setTeam(JSON.parse(localStorage.getItem('team')));
            setTeamText(`${pokemon_json.name} añadido al equipo. Tienes ${team.length + 1} pokemon en tu equipo`);
            setShow(true);
        }
        else {
          setTeamText("El equipo está lleno");
          setShow(true);
        }
      }

    return (
        <LinearGradient className="linearGradient" style={{background: `${data.types.length>1?`linear-gradient(var(--${data.types[0].type.name}), var(--${data.types[1].type.name}))`:`linear-gradient(var(--${data.types[0].type.name}),var(--${data.types[0].type.name}))`}`}}>
            <ContenedorFicha className="ficha">
                <div className="fichaName font-bold">
                    {data.name}
                </div>
                <div className="fichaSprite">
                    <img src={data.sprites.front_default} alt="sprite"/>
                </div>
                <FichaProperties data={data} />
                <button className="fichaButton" onClick={() => {guardarPokemon(data);incrementar()}}>Añadir a mi equipo
                </button>
                <Toast className={`bg-light toast ${teamText.includes('agregado')? 'border-success':'border-warning'}`} onClose={() => setShow(false)} show={show} delay={3000} autohide>
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
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    li {
        text-transform: capitalize;
    }
`;

const LinearGradient = styled.div`
    margin: 0 auto;
    display: flex;
    border-radius: 1rem;
`;