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
  async function fetchTypeDetails(type) {
    if (type.name !== "unknown"){
      const result = await axios.get(type.url);
      setTypeDetails([...typeDetails,[type.name, result.data]]); 
    }  
  } 

  useEffect(() => {
    if(types.length>0)
      types.forEach((type)=>{
        fetchTypeDetails(type);
      })
  }, [types]);

  var tipos = typeDetails.map((type) => {
    return (
      <ContenedorTipo>
          <div>
            {/*Nombre*/}
            <div>{type[0]}</div>
            <div>
              <div>
                Recibe daño doble de:
                {type[1].damage_relations.double_damage_from.map((x)=>{
                  return x;
                })}
              </div>
              {/* <div>
                Hace daño doble a
                {type[1].damage_relations.double_damage_from}
              </div>
              <div>
                Recibe la mitad de daño de
                {type[1].damage_relations.double_damage_from}
              </div>
              <div>
                Hace la mitad de daño a
                {type[1].damage_relations.double_damage_from}
              </div>
              <div>
                No recibe daño de
                {type[1].damage_relations.double_damage_from}
              </div>
              <div>
                No hace daño a
                {type[1].damage_relations.double_damage_from}
              </div> */}
            </div>
          </div>
      </ContenedorTipo>
    )
  })

  return (
    // <ContenedorListaTipos>
    //   {tipos.map((x)=>{
    //     debugger
    //     return x;
    //   })}
    // </ContenedorListaTipos>
    <div>En construcción</div>
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