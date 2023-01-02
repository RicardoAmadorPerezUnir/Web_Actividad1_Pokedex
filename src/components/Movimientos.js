import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export function Movimientos() {
    const [moves, setMoves] = useState([]);

    useEffect(() => {
        async function fetchMoves() {
            const result = await axios.get('https://pokeapi.co/api/v2/move?limit=165');
            setMoves(result.data.results);
        }
        fetchMoves();
    }, []);

    return (
        <ContendorMovimientos>
            {moves.map(move=> (
                <contenedorFichaMov key={move.name}>{move.name}
                    <ul>
                        <li>{move.url}</li>
                    </ul>
                </contenedorFichaMov>
            ))}
        </ContendorMovimientos>
    );

}

const ContendorMovimientos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
`;