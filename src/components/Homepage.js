import React, { useState } from 'react';
import axios from 'axios';

function PokemonSearch() {
  const [query_pokemon, setSearch] = useState('');
  const [pokemon, setPokemon] = useState(null);

  async function handleSearch() {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query_pokemon}`);
    setPokemon(result.data);
  }

  return (
    <div>
      <input
        type="text"
        value={query_pokemon}
        onChange={event => setSearch(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {pokemon ? (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : null}
    </div>
  );
}



// const query_pokemon_request = (query_pokemon) => {
//     const [data, setData] = useState();
  
//     const handleClick = async () => {
//       setIsLoading(true);
//       try {
//         url = 'https://pokeapi.co/api/v2/pokemon/' + query_pokemon;
//         const response = await fetch(url, {method: 'GET'});
  
//         if (!response.ok) {
//           throw new Error(`Error! status: ${response.status}`);
//         }
  
//         const result = await response.json();
  
//         console.log('result is: ', JSON.stringify(result, null, 4));
//       } catch (err) {
//         console.log(err.message);
//     };
//   }
// }

// function Homepage() {
//     return React.createElement(
//         'div',
//         {className: 'Homepage'},
//         React.createElement(
//             'h1',
//             {className: 'title'},
//             'Pokédex'
//         ),
//         React.createElement(
//             'div',
//             {className: 'search'},  
//             React.createElement(
//                 'label',
//                 {for: 'pokemon_search_text'},
//                 'Pokémon:'
//             ),
//             React.createElement(
//                 'input',
//                 {type: 'text', id: 'pokemon_search_field', name: 'pokemon_search_field', value: 'Charizard'}
//             ),
//             React.createElement(
//                 'button',
//                 {type: 'submit', onClick: query_pokemon_request},
//                 'Busca'
//             ),
//             React.createElement(
//                 'div',
//                 {className: 'search-results'},
//                 Entry
//             )
//         )
//     );
// }