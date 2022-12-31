import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { Ficha } from './Ficha';

export const Pokedex = (props) => {
  const [pokemon_list, setPokemon] = useState([]);
  const [pokemon_details, setPokemonDetails] = useState([])
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchPokemon() {
      const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      setPokemon(result.data.results);
    }
    fetchPokemon();
  }, []);


  var pokemones = pokemon_list.map((pokemon) => {
    return (
      <ContenedorPokemon>
        <div className="pokemonName">
          {pokemon.name}
        </div>
        <button className="pokedexButton" onClick={() => {
          axios.get(pokemon.url)
            .then((response) => {
                setPokemonDetails(response.data);
                setShow(true);
            })
            .catch((error) => {
                setPokemonDetails(null);
                console.log(error);
            })
          }}>Entrada completa
        </button>
      </ContenedorPokemon>
    )
  });

    if (pokemon_list !== null) {
      return (
        <ContenedorPokedex>
          {pokemones}
          <SModal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Ficha del pokemon</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Ficha 
                    data={pokemon_details} 
                    guardar={props.props.guardarPokemon} 
                    eliminar={props.props.eliminarPokemon} 
                    showToast={props.props.showToast}
                    teamText={props.props.teamText}/>
            </Modal.Body>
          </SModal>
        </ContenedorPokedex>
      )}
      else {
        return (
          <p>Cargando...</p>
        )
      }
}


const ContenedorPokedex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;

const SModal = styled(Modal)`
    .ficha{
        width: 50%;
    }
`;


const ContenedorPokemon = styled.div`
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    width: 20%;
    padding: .5rem;

    .pokemonName {
        text-transform: capitalize;
        margin-bottom: .5rem;
        font-size: 1.2rem;
    }

    .pokedexButton {
        background-color: #EA6548;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: .5rem;
        font-size: 1rem;
        cursor: pointer;
        color: #fff;
    }
`;