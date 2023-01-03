import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Tipo } from './Tipo';

export function Tipos() {
  const [types, setTypes] = useState([]);
  const [typeDetails, setTypeDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTypes() {
      const result = await axios.get('https://pokeapi.co/api/v2/type');
      setTypes(result.data.results.filter((x)=>x.name!=="unknown"));
    }
    fetchTypes();
  }, []);
  
  var aux=[];
  useEffect(() => {
    if(types.length>0)
      types.forEach((type)=>{
        async function fetchTypeDetails(type) {
            const result = await axios.get(type.url);
            aux.push([type.name, result.data]); 
            if(aux.length===types.length){
              setTypeDetails(aux);
              setLoading(false);
            }
        }
        fetchTypeDetails(type);
      })
  }, [types]);

  return (
    !loading?<ContenedorListaTipos>
    {typeDetails.map((x)=><Tipo detalles={x}/> )}
    </ContenedorListaTipos>:<div>Cargando...</div>
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