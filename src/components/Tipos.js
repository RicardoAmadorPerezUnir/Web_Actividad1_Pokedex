import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export function Tipos() {
  const [types, setTypes] = useState([]);
  const [typeDetails, setTypeDetails] = useState([]);

  useEffect(() => {
    async function fetchTypes() {
      const result = await axios.get('https://pokeapi.co/api/v2/type');
      setTypes(result.data.results);
    }
    fetchTypes();
  }, []);

  var tipos;
  useEffect(() => {
    debugger
    if(types.length>0)
      types.map((type)=>{
        async function fetchTypeDetails(type) {
          const result = await axios.get(type.url);
          setTypeDetails(result.data);
          tipos = 
          <ContenedorTipo>
            <div>
              {type.name}
              {result.data.move_damage_class.name}
            </div>
          </ContenedorTipo>
        }
        fetchTypeDetails(type);
      })
  }, [types]);

  
  // var tipos = types.map((type) => {    
  //   return (
  //     typeDetails.length>0 ? <ContenedorTipo>
  //       <div>
  //         {type.name}
  //         {typeDetails.move_damage_class.name}
  //       </div>
  //     </ContenedorTipo>:null
  //   )
  // });


  return (
    <ContenedorListaTipos>
      {tipos}
    </ContenedorListaTipos>
  )
}


const ContenedorListaTipos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

const ContenedorTipo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 10%;
  height: 50vh;
  background-color: #f5f5f5;
`;