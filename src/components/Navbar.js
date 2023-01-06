import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Inicio } from "./Inicio";
import { Pokedex } from "./Pokedex";
import { Tipos } from "./Tipos";
import { Movimientos } from "./Movimientos";
import { MiEquipo } from "./MiEquipo";


export const Navbar = (props) => {
    return (
        <div>
            <BrowserRouter>
                <Cabecera>
                    <SNavlink to="/">Inicio</SNavlink>
                    <SNavlink to="/pokedex">Pokédex</SNavlink>
                    <SNavlink to="/tipos">Tipos</SNavlink>
                    <SNavlink to="/movimientos">Movimientos</SNavlink>
                    <SNavlink to="/mi-equipo">Mi equipo</SNavlink>
                </Cabecera>
                <Routes>
                    <Route path="/" element={<Inicio props={props}/>}/>
                    <Route path="/pokedex" element={<Pokedex pokedex={props}/>}/>
                    <Route path="/tipos" element={<Tipos/>}/>
                    <Route path="/movimientos" element={<Movimientos/>}/>
                    <Route path="/mi-equipo" element={<MiEquipo props={props}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}


const Cabecera = styled.div`
    background-color: #f5f5f5; 
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    padding 1rem;
    gap: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
`;

const SNavlink = styled(NavLink)`
    color: #000;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    &.active {
        color: #EA6548;
    }
    :hover {
        color: #EA6548;
    }
`;