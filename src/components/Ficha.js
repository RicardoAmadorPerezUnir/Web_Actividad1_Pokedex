import React , { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Toast } from 'react-bootstrap';

export const Ficha = (props) => {
    var types = props.data.types.map((type) => {
        return <li>{type.type.name}</li>
    });
    var stats = props.data.stats.map((stat) => {
        return <li>{stat.stat.name}: {stat.base_stat}</li>
    });
    const [show, setShow] = useState(props.showToast);(
    useEffect(() => {
        setShow(props.showToast);
    }, [props.showToast]));

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
                    <ul>{types}</ul>
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
            <button className="fichaButton" onClick={() => props.guardar(props.data)}>Añadir a mi equipo
            </button>
            <Toast className="d-inline-block bg-light" onClose={() => setShow(false)} show={show} delay={3000} autohide >
                <Toast.Body>
                {props.teamText}
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