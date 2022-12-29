import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      setPokemon(result.data.results);
    }
    fetchPokemon();
  }, []);

  return (
    <ul>
      {pokemon.map(p => (
        <li key={p.name}>{p.name}</li>
      ))}
    </ul>
  );
}