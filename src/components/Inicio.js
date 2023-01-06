import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Ficha } from "./Ficha";
import { Toast } from "react-bootstrap";

export const Inicio = (props) => {
  const [query_pokemon, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch() {
    if (query_pokemon === "") {
        setError("Tienes que introducir un nombre de pokemon existente");
        setShow(true);
        setPokemon(null);
    } 
    else {
        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query_pokemon}`);
            setPokemon(result.data);
        }
        catch (error) {
            setError("No se ha encontrado el pokemon");
            setShow(true);
            setPokemon(null);
        }
    }
  }

  return (
    <ContenedorInicio className="pagInicio">
      <h2>
        Busca tu pokemon favorito
      </h2>
      <input
        type="text"
        value={query_pokemon}
        onChange={event => setSearch(event.target.value)}
        onKeyDown={event => {
          if(event.key==="Enter"){
            setSearch(event.target.value); 
            handleSearch()
          }
          }}
      />
      <button id="buscar" onClick={handleSearch}>Buscar</button>
      {pokemon && (
        <Ficha data={pokemon} team={props.props.team} setTeam={props.props.setTeam}/>
      )}
      <Toast className="d-inline-block bg-light toast border-warning" onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Body>
          {error}
        </Toast.Body>
      </Toast>
    </ContenedorInicio>
  );
}

const ContenedorInicio = styled.div`
// font-family: "dogica_pixelbold"
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 15%;
  align-items: center;
  min-height: 100vh;
  width: 100%;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  input {
    width: 20rem;
    height: 2rem;
    margin-bottom: 1rem;
  }

  button {
    width: 10rem;
    height: 2.5rem;
    margin: .5rem auto;
    border-radius: 16px;
    background-color: white;
  }

  .linearGradient{
    width: 20%;
  }
`;
