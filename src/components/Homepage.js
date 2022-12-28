// React component for the homepage for searching any pokemon

import React from 'react';
import './Homepage.css';
import { Entry } from './Entry';

import {useState} from 'react';



const searched_pokemon_request = (searched_pokemon) => {
    const [data, setData] = useState();
  
    const handleClick = async () => {
      setIsLoading(true);
      try {
        url = 'https://pokeapi.co/api/v2/pokemon/' + searched_pokemon;
        const response = await fetch(url, {method: 'GET'});
  
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
  
        const result = await response.json();
  
        console.log('result is: ', JSON.stringify(result, null, 4));
      } catch (err) {
        console.log(err.message);
    };
  }
}

function Homepage() {
    return React.createElement(
        'div',
        {className: 'Homepage'},
        React.createElement(
            'h1',
            {className: 'title'},
            'Pokédex'
        ),
        React.createElement(
            'div',
            {className: 'search'},  
            React.createElement(
                'label',
                {for: 'pokemon_search_text'},
                'Pokémon:'
            ),
            React.createElement(
                'input',
                {type: 'text', id: 'pokemon_search_field', name: 'pokemon_search_field', value: 'Charizard'}
            ),
            React.createElement(
                'button',
                {type: 'submit', onClick: searched_pokemon_request},
                'Busca'
            ),
            React.createElement(
                'div',
                {className: 'search-results'},
                Entry
            )
        )
    );
}